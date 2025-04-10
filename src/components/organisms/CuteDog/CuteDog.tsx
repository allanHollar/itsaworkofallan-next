import React from "react";
import styles from "./CuteDog.module.scss";

const CuteDog = () => {
  return (
    <div className={`justify-center sm:justify-start ${styles.dogContainer}`}>
      <div className={styles.dog}>
        <div className={`${styles.dogEars} ${styles.earsLeft}`}></div>
        <div className={`${styles.dogEars} ${styles.earsRight}`}></div>

        <div className={styles.dogHead}>
          <div className={styles.dogEyes}></div>
          <div className={styles.dogMouth}>
            <div className={styles.dogNose}></div>
            <div className={styles.dogTongue}></div>
          </div>
        </div>

        <div className={styles.dogTail}></div>

        <div className={styles.dogBody}>
          <div className={styles.dogFoot}></div>
        </div>

        <div className={styles.ball}></div>
      </div>
    </div>
  );
};

export default CuteDog;
