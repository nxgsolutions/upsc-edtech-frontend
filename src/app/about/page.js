import React from 'react'
import Herosection from '../components/herosection'
import ImageText from '../components/ImageText.component'
import { Fragment } from 'react'
export default function About() {
  return (
    <div>
      {/* <h1>About Us</h1>
       */}
       <Herosection imageUrl={"/images/ml.svg"} title={"Our AI Products and Solutions"}/>
       <ImageText
          image_url={"/images/ml.svg"}
          image_alt={"Generative AI"}
          theme={"dark"}
          fullwidth={true}
          html={
            <Fragment>
              <h1>Generative AI</h1>
              <p>Adipisicing ut irure sint sit. Ea excepteur irure laborum voluptate Lorem aute cillum. Et ipsum sunt mollit amet eiusmod qui eu.</p>
              <p>Ex ea tempor minim Lorem esse qui excepteur ex excepteur velit. Pariatur ullamco veniam Lorem amet do fugiat sint enim dolor est et. Consectetur id enim laborum Lorem ut ex nostrud anim. Veniam esse velit laboris do aliqua esse ullamco occaecat consectetur fugiat.</p>

            </Fragment>} />
    </div>
  )
}
