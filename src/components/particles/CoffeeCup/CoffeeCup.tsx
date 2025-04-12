import styles from "./Coffee.module.scss";

const CoffeeCup = () => {
  return (
    <div className={` mt-10 mb-5 sm:mt-12 ${styles.cup}`} id="coffee">
      <div className={styles.coffee}></div>
    </div>
  );
};

export default CoffeeCup;
