import { FC } from "react";
import { cdnBaseUrl } from "../../../config";
import styles from "./FunnyCat.module.scss";

const FunnyCatImage = `${cdnBaseUrl}/cute-cat.webp`;

const FunnyCat: FC = () => {
  return (
    <div className={styles.catContainer}>
      <div className={styles.cat}>
        <img
          src={FunnyCatImage}
          alt="Cat playing with a ball"
          width={200}
          height={200}
        />

        <div className={`${styles.left} ${styles.eye}`}>
          <div className={styles.eyeWatch}>
            <div className={styles.glare}></div>
          </div>
        </div>

        <div className={`${styles.right} ${styles.eye}`}>
          <div className={styles.eyeWatch}>
            <div className={styles.glare}></div>
          </div>
        </div>
      </div>

      <div className={styles.ballContainer}>
        <div className={styles.ballShadow}>
          <div className={styles.ball}></div>
        </div>
      </div>
    </div>
  );
};

export default FunnyCat;
