import { Link } from "react-router-dom";

import backgroundImage from "../../assets/Background/backgroundCategory.gif";

import styles from "./MostPopular.module.css";

const loadedCategory = [
  {
    id: 1,
    name: "Tee",
  },
  {
    id: 2,
    name: "Shirts",
  },
  {
    id: 3,
    name: "Pants",
  },
  {
    id: 4,
    name: "Hoodie",
  },
  {
    id: 5,
    name: "Jacket",
  },
  {
    id: 6,
    name: "Shoes",
  },
  {
    id: 7,
    name: "Bags",
  },
  {
    id: 8,
    name: "Accessories",
  },
];

const MostPopular = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerImage}>
        <img src={backgroundImage} alt="banner-img" />
        <div className={styles.bannerList}>
          <h2>PRODUCTS</h2>
          <ul>
            {loadedCategory.map((category) => (
              <li key={category.id}>
                <Link to={`/shop/products?category=${category.name}`} className={styles.button}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
