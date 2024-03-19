'use client'
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Tree = () => {
    // Inside Tree.js component
    const data = {
        name: 'Root',
        children: [
          { name: 'Child 1' },
          { name: 'Child 2' },
          {
            name: 'Child 3',
            children: [
              { name: 'Child 3.1' },
              { name: 'Child 3.2' }
            ]
          }
        ]
      };
const handleClick = (d) => {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
};

const update = (source) => {
    
  const svg = d3.select(svgRef.current);

  const treeLayout = d3.tree().size([600, 400]);
  const nodes = treeLayout(root).descendants();
  const links = nodes.slice(1);

  // Update links
  const link = svg.selectAll('.link')
    .data(links, d => d.id);

  link.exit().remove();

  link.enter().insert('path', 'g')
    .attr('class', 'link')
    .attr('d', d => diagonal(d));

  // Update nodes
  const node = svg.selectAll('.node')
    .data(nodes, d => d.id);

  node.exit().remove();

  const nodeEnter = node.enter().append('g')
    .attr('class', 'node')
    .attr('transform', d => `translate(${source.y0},${source.x0})`)
    .on('click', handleClick);

  nodeEnter.append('circle')
    .attr('r', 5);

  nodeEnter.append('text')
    .attr('dy', '.35em')
    .attr('x', d => d.children ? -13 : 13)
    .style('text-anchor', d => d.children ? 'end' : 'start')
    .text(d => d.data.name);

  const nodeUpdate = nodeEnter.merge(node);

  nodeUpdate.transition()
    .duration(750)
    .attr('transform', d => `translate(${d.y},${d.x})`);

  nodeUpdate.select('circle')
    .attr('r', 5)
    .attr('cursor', 'pointer')
    .style('fill', d => d._children ? 'lightsteelblue' : '#fff');
};

const diagonal = d3.linkVertical()
  .x(d => d.y)
  .y(d => d.x);

  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const treeLayout = d3.tree().size([width, height]);

    const root = d3.hierarchy(data);
    treeLayout(root);

    const link = svg.selectAll('.link')
      .data(root.descendants().slice(1))
      .enter().append('path')
      .attr('class', 'link')
      .attr('d', d => `M${d.x},${d.y}C${d.x},${(d.y + d.parent.y) / 2} ${d.parent.x},${(d.y + d.parent.y) / 2} ${d.parent.x},${d.parent.y}`);

    const node = svg.selectAll('.node')
      .data(root.descendants())
      .enter().append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.x},${d.y})`);

    node.append('circle')
      .attr('r', 5);

    node.append('text')
      .attr('dy', '.35em')
      .attr('x', d => d.children ? -13 : 13)
      .style('text-anchor', d => d.children ? 'end' : 'start')
      .text(d => d.data.name);
  }, [data]);

  return <svg ref={svgRef} width={600} height={400}></svg>;
};

export default Tree;
