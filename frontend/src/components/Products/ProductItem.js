import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";

const ProductItem = (props) => {
  const [isHover, setIsHover] = useState(false);

  const styleImage = `${styles.productImage} ${styles.lazyLoadImageBg}`;
  const productActionClasses = `${styles.productAction} ${
    isHover ? styles.productActionActive : ""
  }`;

  const hoverHandler = () => {
    setIsHover(true);
  };

  const removerHoverHandler = () => {
    setIsHover(false);
  };

  return (
    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
      <div
        className={styles.product}
        onMouseOver={hoverHandler}
        onMouseOut={removerHoverHandler}
      >
        <figure className={styles.productMedia}>
          {props.isHot && (
            <span
              className={`${styles.productLabel} ${styles.productLabelHot}`}
            >
              Hot
            </span>
          )}
          {props.sale && (
            <span
              className={`${styles.productLabel} ${styles.productLabelSale}`}
            >
              Sale {props.sale} %
            </span>
          )}
          <a>
            <span className={styleImage}>
              {!isHover && <img alt="product" src={props.image1} />}
              {isHover && <img alt="product" src={props.image2} />}
            </span>
          </a>
          <div className={productActionClasses}>
            <a className={styles.btnProduct}>
              <i className="fas fa-cart-plus"></i>
              add to cart
            </a>
            <div className={styles.vl}></div>
            <Link to="/shop/detail/p1" className={styles.btnProduct}>
              <i className="fas fa-eye"></i>
              view detail
            </Link>
          </div>
        </figure>
        <div className={styles.productBody}>
          <div className={styles.productCategory}>{props.category} | {props.brand}</div>
          <div className={styles.productTitle}>{props.name}</div>
          <div className={styles.productPrice}>{props.price} vnd</div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
