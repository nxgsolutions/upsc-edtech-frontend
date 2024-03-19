import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar.component";
import Herosection from "./components/herosection"
import Commonstyles from "./styles/common.module.css"
import heroStyles from "./styles/herosection.module.css"
import Link from "next/link";
import { Button } from '@nextui-org/react'
import { Card, CardBody, Divider } from "@nextui-org/react";
import ImageText from "./components/ImageText.component";
import { Fragment } from "react";
import VideoText from "./components/VideoText.component";
// import Navbar from "./components/Navbar.component";

export default function Home() {
  return (
    <div >
      {/* <Navbar></Navbar> */}

      {/* <Component {...pageProps} />  */}
      {/* <Navbar /> */}
      <Herosection
        title={"Next Generation AI Technology Changing the world"}
        imageUrl={"/images/hero-1.svg"} />

      <div >
        <div className={`${Commonstyles.container} ${Commonstyles.centered}`}>
          <h1 className={Commonstyles.heading}>Our Offerings</h1>
          <p>We offer end-to-end future-ready solutions in automation, cloud, mobility and analytics. Each of our service verticals addresses a specific need and offers customized solutions focused to enhance efficiency, productivity, flexibility, and competitive edge.</p>
        </div>
        {/* <Divider className="my-4" /> */}
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

       
        <ImageText
          image_url={"/images/ml.svg"}
          image_alt={"Machine Learning"}
          imagePosition={"right"}
          html={
            <Fragment>
              <h1>Machine Learning</h1>
              <p>Adipisicing ut irure sint sit. Ea excepteur irure laborum voluptate Lorem aute cillum. Et ipsum sunt mollit amet eiusmod qui eu.</p>
              <p>Ex ea tempor minim Lorem esse qui excepteur ex excepteur velit. Pariatur ullamco veniam Lorem amet do fugiat sint enim dolor est et. Consectetur id enim laborum Lorem ut ex nostrud anim. Veniam esse velit laboris do aliqua esse ullamco occaecat consectetur fugiat.</p>

            </Fragment>} />
            <VideoText />

      </div>

    </div>
  );
}
