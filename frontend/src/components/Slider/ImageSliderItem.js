import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { pageSelectorActions } from "../../store/pageSelector";

import styles from "./ImageSliderItem.module.css";

const ImageSliderItem = (props) => {
  const dispatch = useDispatch();

  const resetSelector = () => {
    dispatch(pageSelectorActions.changePage("shop-page"));
  };
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles.card}>
        <div className={styles["card-image"]}>
          <img src={props.image} alt="product" />
        </div>
        <div className={styles["card-actions"]}>
          <Link to={`/shop/products?category=${props.category}`} onClick={resetSelector}>SHOP {props.category}</Link>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderItem;
