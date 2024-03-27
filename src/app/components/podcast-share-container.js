import styles from "./podcast-share-container.module.css";

const PodcastShareContainer = () => {
  return (
    <>
    <div className={styles.socialShareSection}>
      <div className={styles.textUrlContainer}>
        <div className={styles.text}>
          <div className={styles.listenAndFollowup}>
            Listen and followup daily articles in podcast
          </div>
        </div>
        <div className={styles.url}>
          <div className={styles.listenAndFollowup}>
            https://spotify.com/nxgsols
          </div>
        </div>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.socialIcon} />
      </div>
    </div>
    <div className={styles.socialShareSection}>
      <div className={styles.textUrlContainer}>
        <div className={styles.text}>
          <div className={styles.listenAndFollowup}>
            Listen and followup daily articles in podcast
          </div>
        </div>
        <div className={styles.url}>
          <div className={styles.listenAndFollowup}>
            https://spotify.com/nxgsols
          </div>
        </div>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.socialIcon} />
      </div>
    </div>
    </>
    
  );
};

export default PodcastShareContainer;
