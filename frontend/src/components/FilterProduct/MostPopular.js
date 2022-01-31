import backgroundImage from '../../assets/Background/backgroundCategory.gif'

import styles from "./MostPopular.module.css";

const MostPopular = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerImage}>
        <img
          src={backgroundImage}
          alt="banner-img"
        />
        <div className={styles.bannerList}>
          <h2>PRODUCTS</h2>
          <ul>
            <li>
              <a className={styles.button}>All</a>
            </li>
            <li>
              <a className={styles.button}>Shirt</a>
            </li>
            <li>
              <a className={styles.button}>T-Shirt</a>
            </li>
            <li>
              <a className={styles.button}>Pants</a>
            </li>
            <li>
              <a className={styles.button}>Shorts</a>
            </li>
            <li>
              <a className={styles.button}>Hoodies</a>
            </li>
            <li>
              <a className={styles.button}>Outerwear</a>
            </li>
            <li>
              <a className={styles.button}>Bags</a>
            </li>
            <li>
              <a className={styles.button}>Backpack</a>
            </li>
            <li>
              <a className={styles.button}>Accessories</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
