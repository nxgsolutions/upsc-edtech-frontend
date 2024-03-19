// 'use client'
import styles from "./page.module.css";

import TreeMap from "./components/TreeMap";
import Tree from "./components/Tree";


function Desktop() {
  return (
    <div className={styles.desktop1}>
      <div className={styles.cardPrimary}>
        <b className={styles.subject} />
        <div className={styles.scienceAndTechnologyContainer}>
          <b>Title:</b>
          <span>
            {" "}
            Did the Earth Cross the 1.5 Degrees Celsius Warming Threshold in
            2023?
          </span>
        </div>
      </div>
      <div className={styles.oneColuns}>
        <div className={styles.cardPrimary1}>
          <b className={styles.subject1}>Subject:</b>
          <div className={styles.scienceAndTechnologyContainer}>
            <b>{`Subject: `}</b>
            <span>Science and Technology</span>
          </div>
        </div>
        <div className={styles.cardPrimary2}>
          <b className={styles.subject} />
          <div className={styles.scienceAndTechnologyContainer}>
            <b>Topic:</b>
            <span> Climate Change</span>
          </div>
        </div>
      </div>
      <div className={styles.cardPrimary3}>
        <div className={styles.scienceAndTechnologyContainer3}>
          <p
            className={styles.manyWarmingRecords}
          >{`     Many warming records were broken in 2023 along with climate disasters such as wildfires, cyclones, droughts, and floods. In this time, the focus of the public narrative – often with the participation of scientists – has often been on whether we crossed the ‘magical’ warming threshold of 1.5 degrees C. The best estimates, derived from data recorded by instruments, say the planet is just under this threshold. But did we really cross the 1.5 degrees C threshold in 2023? Before we discuss the answer, let’s remember that 1.5 degrees C is nota scientific threshold. It became enshrined in the Paris Agreement after intense negotiations by member-countries of the U.N. Framework Convention onClimate Change (UNFCCC). But it’s not a round number by accident: it comes from a figure – 2 degrees C – European politicians found easier to aim at in the1990s. Now a new study, published on February 5 in Nature, has added fuel to the fire of the threshold-crossing controversy. Based on estimates of warming from palaeo-thermometry, scientists from Australia and the U.S. have said that the earth’s surface has already warmed by more than 1.5 degrees C on average over pre-industrial levels. `}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.manyWarmingRecords}>
            {" "}
            A major caveat of the study is that the scientists have collected
            warming data from only one location and have extrapolated it to be
            indicative of the global mean temperature trend. This said, these
            so-called ‘palaeo proxies’ constitute an amazing technique that uses
            chemical evidence stored in various organic matter, such as corals,
            stalactites, and stalagmites, to approximate the temperature at some
            point in the past. But just as insightful as this chemical evidence
            can be, we should remember that it is still only indirect evidence
            of temperature changes with respect to a baseline temperature.The
            evidence can’t measure the actual overall temperatures. Since palaeo
            proxies don’t directly measure the temperature, we call them proxies
            of past temperature deviations (the ‘palaeo’ denotes the past).
            Researchers carefully calibrate the various chemical compounds
            assimilated by some species into their biogenic materials – such as
            calcium carbonate or chalk – in modernity to establish the
            relationships between those chemicals and the prevailing local
            temperature. When such a biogenic material from the past is found,
            scientists can piece together when the biogenic material was
            deposited (using the quantity of certain isotopes that decay at a
            steady rate over time). They then study the assimilated chemicals to
            deduce the temperature deviations during that time period. The
            results are very local temperature anomaly estimates from the past,
            so they can’t be the basis for any scientifically robust claims
            about tiny deviations of past temperatures from instrumental
            records. Next, let’s examine the significance of crossing the 1.5
            degrees C threshold.
          </p>
        </div>
      </div>
      <div className={styles.mindMapping} >
        <div className={styles.tree} >
          <TreeMap />
          {/* <Tree/> */}

        </div>
        <div className={styles.treeContentIcon} >
          <img
            // className={styles.treeContentIcon}
            alt=""
            src="/treecontent@2x.png"
          /></div>
      </div>
      <div className={styles.cardPrimary4}>
        <b className={styles.scienceAndTechnologyContainer}>
          Key Terms, Keywords and Fact Used in the Article
        </b>
      </div>
    </div>
  );
};

export default Desktop;
