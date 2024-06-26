'use client'
import styles from "./page.module.css";
import axios from 'axios'
import TreeMap from "./components/TreeMap";
// import TreeNextjs from "./components/TreeNext";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import React from "react";
import { getArticleData, setLoading } from "./redux/counterSlice"
import PodcastShareContainer from "./components/podcast-share-container";
const Desktop = () => {
  console.log("process.env.API_URL", process.env.API_URL)
  const dispatch = useDispatch()
  const getToken = async () => {
    const token_response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/auth/generate-token", {

      'clientId': process.env.NEXT_PUBLIC_CLIENT_ID,
    }
    );
    return token_response.data.token
    // console.log("")
  }

  const getData = async () => {
    dispatch(setLoading())
    try {


      const token = await getToken()

      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/article//summarization/65c16bb1c08c53aca2dbde94", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }
      );
      // setArticleData(
      //   response.data
      // )
      dispatch(getArticleData({ type: "SUCCESS", payload: response.data }))
    }
    catch (error) {
      console.log("error", error)
    }
  }
  const [nodeDetails, setNodeDetails] = useState("")
  const { articles, articleLoading } = useSelector(state => state.counter);
  console.log("articles", articles)
  useEffect(() => {
    getData()
  }, [])

  // const TreeCompoment = React.useMemo(() => <TreeMap setNodeDetails={setNodeDetails} data={articles?.article_summarization?.mind_mapping} loading={articleLoading}/>, []);

  console.log("props.loading", articleLoading)
  return (
    <div className={styles.page}>
      <img
        className={styles.headerImageContainerIcon}
        alt=""
        src="images/headerimagecontainer@2x.png"
      />
      <div className={styles.cardPrimary}>
        <b className={styles.subject} />
        <div className={styles.scienceAndTechnologyContainer}>
          <b>Title:</b>
          <span>
            {articles?.article_summarization?.title}
          </span>
        </div>
      </div>
      <div className={styles.oneColuns}>
        <div className={styles.cardPrimary1}>
          <b className={styles.subject1}>Subject:</b>
          <div className={styles.scienceAndTechnologyContainer}>
            <b>{`Subject: `}</b>
            <span>{articles?.article_summarization?.subject}</span>
          </div>
        </div>
        <div className={styles.cardPrimary2}>
          <b className={styles.subject} />
          <div className={styles.scienceAndTechnologyContainer}>
            <b>Topic:</b>
            <span> {articles?.article_summarization?.sub_topic}</span>
          </div>
        </div>
      </div>
      <div className={styles.cardPrimary3}>
        <div className={styles.scienceAndTechnologyContainer3}>
          <p
            className={styles.manyWarmingRecords}
          >
            {articles?.article_summarization?.content}
          </p>
        </div>
      </div>
      <div className={styles.mindMapping}>
        <div className={styles.tree} >
          {/* {articleLoading?"Loading": TreeCompoment} */}

          {articleLoading ? "Loading" : <TreeMap setNodeDetails={setNodeDetails} data={articles?.article_summarization?.mind_mapping} loading={articleLoading} />}
        </div>
        <div className={styles.treeContent}>
          <div className={styles.nodeContent}>{nodeDetails}</div>
        </div>
      </div>
      <div className={styles.keyTermsContainer}>
        <b className={styles.nodeContent}>
          Key Terms, Keywords and Fact Used in the Article
        </b>
        {articles?.search_terms?.map((item) => (<div className={styles.searchTermSingle}>
          <div className={styles.contentContainer}>
            <div className={styles.nodeContent}>
              <b>{`Search Terms: `}</b>
              <span>{item.search_term}</span>
            </div>
            <div className={styles.nodeContent}>
              <b>{`Source: `}</b>
              <span>{item.source}</span>
            </div>
            <b className={styles.nodeContent}>Content:</b>
            <div className={styles.contentDetails}>
              <div className={styles.contentDetails1}>
                <pre> {item.content.trim()}</pre>
              </div>
            </div>
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.imageGroup}>
              {
                item?.images?.map((image) => (
                  <img className={styles.imageIcon} alt="" src={"https://drive.google.com/thumbnail?id=" + image?.drive_image_url?.split("/")[5]} />

                ))
              }
            </div>
          </div>
        </div>))}
      </div>
      <PodcastShareContainer />
      <div className={styles.searchSection}>
        <div className={styles.input}>
          <textarea
            className={styles.type}
            placeholder="Type Here...."
            rows={4}
            required={true}
          />
          <div className={styles.basilarrowUpOutlineWrapper}>
            <button className={styles.basilarrowUpOutline}>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
