'use client'
import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

// Set the dimensions and margins of the diagram
var margin = { top: 20, right: 90, bottom: 30, left: 120 }
var width = 760 - margin.left - margin.right
var height = 350 - margin.top - margin.bottom;

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
// var svg = d3.select("body").append("svg")
//     // .attr("width", width + margin.right + margin.left)
//     .attr("width", "100%")
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", "translate("
//         + margin.left + "," + margin.top + ")")
// .on("click", function (d) {
//         div.transition()
//             .duration(500)
//             .style("opacity", 0);
//     });
// Define the div for the tooltip

function expand(d) {
  if (d._children) {
    d.children = d._children;
    d._children = null;
  }
  var children = (d.children) ? d.children : d._children;
  if (children)
    children.forEach(expand);
}




// Collapse the node and all it's children
function collapse(d) {
  if (d.children) {
    d._children = d.children
    d._children.forEach(collapse)
    d.children = null
  }
}
function getTextWidth(text, font) {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  context.font = font;
  var metrics = context.measureText(text);
  return metrics.width;
}
const treemap = d3.tree().size([height, width]);
function update(source, svg, div) {
 
  // Assigns the x and y position for the nodes
  var treeData = treemap(source);

  // Compute the new tree layout.
  var nodes = treeData.descendants(),
    links = treeData.descendants().slice(1);

  // Normalize for fixed-depth.
  nodes.forEach(function (d) { d.y = d.depth * 150 });

  // ****************** Nodes section ***************************

  // Update the nodes...
  var i = 0
  var duration = 450
  var node = svg.selectAll('g.node')
    .data(nodes, function (d) { return d.id || (d.id = ++i); })
  // .on("mouseover", function (d) {
  //     div.transition()
  //         .duration(200)
  //         .style("opacity", .9);
  //     div.html(`${d.data.name}</br><a href='google.com' target='_blank'>Click me</a>`)
  //         .style("left", (d3.event.pageX + 10) + "px")
  //         .style("top", (d3.event.pageY - 35) + "px");
  // })


  // Enter any new modes at the parent's previous position.
  var nodeEnter = node.enter().append('g')
    .attr('class', 'node')
    .attr("transform", function (d) {
      return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on('click', click)


  // Add Circle for the nodes
  nodeEnter.append('circle')
    .attr('class', 'node')
    .attr('r', 1e-6)
    // .attr("title", function (d) { return d.link; })
    // .append("title")
    // .text(function (d) { return d.data.link ? "Click on text to Open Link" : d.data.name})
    .style("fill", function (d) {
      return d._children ? "#c10f6e" : "#fff";
    })
    // .on("mouseover", function (d) {
    //   div.transition()
    //     .duration(200)
    //     .style("opacity", .9);
    //   div.html(`${d.data.name}</br>` + ` <a href='${d.data.link}' target='_blank'>Open Link</a>`)
    //     .style("left", (d3.event.pageX + 15) + "px")
    //     .style("top", (d3.event.pageY - 35) + "px");
    // });

  // Add labels for the nodes
  nodeEnter.append('text')
    .attr("dy", ".35em")
    .attr("x", function (d) {
      return d.children || d._children ? -13 : 13;
    })
    .attr("text-anchor", function (d) {
      return d.children || d._children ? "end" : "start";
    })

    // .text(function (d) { return d.data.name; })
    .style("stroke", function (d) { return d.data.link ? "#1598ff" : "black"; })
    .style("stroke-width", function (d) { return d.data.link ? "0.5px" : "0px"; });


  nodeEnter.each(function (d) {
    var textWidth = getTextWidth(d.data.name, "12px sans-serif"); // Adjust font size and family as needed
    var padding = 5; // Padding to add around the text
    // var width = textWidth + padding;
    var Xpos = textWidth < 120 ? textWidth - (textWidth + 145) : -140
    // var Xpos=-80
    var width = 90

    width = textWidth > 90 ? 90 : textWidth + padding
    var foreignObject = d3.select(this)
      .append("foreignObject")
      .attr("width", function (d) { return d.children || d._children ? 120 : 120 }) // Adjust according to your need
      .attr("height", 50) // Adjust according to your need
      .attr("y", "-.55em")
      .attr("x", function (d) {
        return d.children || d._children ? Xpos : 13;
      })
      .attr("text-anchor", function (d) {
        return d.children || d._children ? "end" : "start";
      })
      .attr("class", "text-div")
      .append("xhtml:div")
      .style("text-align", function (d) { return d.children || d._children ? "right" : "left" })
      .style("overflow", "hidden")
      .style("text-overflow", function (d) { return d.children || d._children ? "ellipsis" : "ellipsis" })
      .html(function (d) { return d.data.name; });
  });



  //             nodeEnter.append("foreignObject")
  // .attr("width", 90) // Adjust according to your need
  // .attr("height", 50) // Adjust according to your need
  // .attr("y", "-.55em")
  // .attr("x", function (d) {
  //                 return d.children || d._children ? -100: 13;
  //             })
  //             .attr("text-anchor", function (d) {
  //                 return d.children || d._children ? "end" : "start";
  //             })
  // .attr("class","text-div")
  // .append("xhtml:div")
  // .style("text-align", "left")
  // .style("overflow", "hidden")
  // .style("text-overflow", "ellipsis")
  // .html(function(d) { return d.data.name; });

  nodeEnter.append("a")
    .attr("xlink:href", function (d) { return d.data.link; })
    .attr("target", "_blank")

    .append("svg:text")
    .attr("x", function (d) { return d._children || d._children ? -10 : 10; })
    .attr("dy", ".35em")
    .attr("text-anchor", function (d) { return d._children || d._children ? "end" : "start"; })
    .text(function (d) { return d.data.name; })
    .style("fill-opacity", 1e-6);


  // UPDATE
  var nodeUpdate = nodeEnter.merge(node);

  // Transition to the proper position for the node
  nodeUpdate.transition()
    .duration(duration)
    .attr("transform", function (d) {
      return "translate(" + d.y + "," + d.x + ")";
    });

  // Update the node attributes and style
  nodeUpdate.select('circle.node')
    .attr('r', 6)
    .style("fill", function (d) {
      return d._children ? "#c10f6e" : "#fff";
    })
    .attr('cursor', 'pointer');



  // Remove any exiting nodes
  var nodeExit = node.exit().transition()
    .duration(duration)
    .attr("transform", function (d) {
      return "translate(" + source.y + "," + source.x + ")";
    })
    .remove();

  // On exit reduce the node circles size to 0
  nodeExit.select('circle')
    .attr('r', 1e-6);

  // On exit reduce the opacity of text labels
  nodeExit.select('text')
    .style('fill-opacity', 1e-6);

  // ****************** links section ***************************

  // Update the links...
  var link = svg.selectAll('path.link')
    .data(links, function (d) { return d.id; });

  // Enter any new links at the parent's previous position.
  var linkEnter = link.enter().insert('path', "g")
    .attr("class", "link")
    .attr('d', function (d) {
      var o = { x: source.x0, y: source.y0 }
      return diagonal(o, o)
    });

  // UPDATE
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate.transition()
    .duration(duration)
    .attr('d', function (d) { return diagonal(d, d.parent) });

  // Remove any exiting links
  var linkExit = link.exit().transition()
    .duration(duration)
    .attr('d', function (d) {
      var o = { x: source.x, y: source.y }
      return diagonal(o, o)
    })
    .remove();

  // Store the old positions for transition.
  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });

  // Creates a curved (diagonal) path from parent to the child nodes
  function diagonal(s, d) {

    var path = `M ${s.y} ${s.x}
                            C ${(s.y - 30 + d.y) / 2} ${s.x},
                              ${(s.y - 30 + d.y) / 2} ${d.x},
                              ${d.y} ${d.x}`

    return path
  }

  // Toggle children on click.
  function click(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }

}

const TreeMap = () => {

  const svgRef = useRef();
  const treeData = {
    "name": "International relations",
    "children": [
      {
        "name": "India",
        "children": [
          {
            "name": "ties with Maldives", "children": [
              { "name": "assertiveness in the region" },
              { "name": "relations with Maldives" }
            ]
          },
          {
            "name": "neighbouring countries", "children": [
              { "name": "assertiveness in the region", "link": "https://google.com" },
              { "name": "relations with Maldives" },
              { "name": "relations with Maldives" }
            ]
          }
        ]
      },
      {
        "name": "Maldives",
        "children": [
          { "name": "close to China" },
          {
            "name": "Chinese influence", "children": [
              { "name": "assertiveness in the region" },
              { "name": "relations with Maldives" }
            ]
          }
        ]
      },
      {
        "name": "China",
        "children": [
          { "name": "assertiveness in the region" },
          { "name": "relations with Maldives" }
        ]
      },
      {
        "name": "China",
        "children": [
          { "name": "assertiveness in the region" },
          { "name": "relations with Maldives" }
        ]
      },
      {
        "name": "China",

      },
      {
        "name": "China",

      },
      // {
      //     "name": "China",

      // },
      // {
      //     "name": "China",

      // },
      {
        "name": "China",
        "children": [
          { "name": "assertiveness in the region" },
          { "name": "relations with Maldives" }
        ]
      }

    ]
  }
  useEffect(() => {

    // Create an SVG container

    var svg = d3.select(svgRef.current).append("svg")
      // .attr("width", width + margin.right + margin.left)
      .attr("width", "100%")
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate("
        + margin.left + "," + margin.top + ")")

    var div = d3.select(svgRef.current).append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    d3.select(svgRef.current)
      .on("click", function (d) {
        div.transition()
          .duration(500)
          .style("opacity", 0);
      });

    var x = d3.scaleBand()
      .range([0, width])
      .paddingInner(.1)
      .paddingOuter(.3)
    // declares a tree layout and assigns the size

    // Add your chart elements here
    // Assigns parent, children, height, depth
    var root = d3.hierarchy(treeData, function (d) { return d.children; });
    root.x0 = height / 2;
    root.y0 = 0;

    // Collapse after the second level
    root.children.forEach(collapse);
    expand(root)
    update(root, svg, div);
  }, []);

  return (
   
        <div ref={svgRef} >
       
      </div>
     
  );
};

export default TreeMap;
