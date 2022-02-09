import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

import styles from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();

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

  const addToCartHandler = (event) => {
    event.preventDefault();
    console.log(props.optionSize[0].id);
    dispatch(
      cartActions.addItemToCart({
        item: { idProductOption: props.optionSize[0].id, quantity: 1},
      })
    );
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
          <Link to={`/shop/detail/${props.id}`}>
            <span className={styleImage}>
              {!isHover && <img alt="product" src={props.image1} />}
              {isHover && <img alt="product" src={props.image2} />}
            </span>
          </Link>
          <div className={productActionClasses}>
            {props.optionSize.length === 1 && (
              <a
                href="/"
                className={styles.btnProduct}
                onClick={addToCartHandler}
              >
                <i className="fas fa-cart-plus"></i>
                add to cart
              </a>
            )}
            {props.optionSize.length > 1 && (
              <Link
                to={`/shop/detail/${props.id}`}
                className={styles.btnProduct}
              >
                <i className="fas fa-cart-plus"></i>
                select option
              </Link>
            )}
            <div className={styles.vl}></div>
            <Link to={`/shop/detail/${props.id}`} className={styles.btnProduct}>
              <i className="fas fa-eye"></i>
              view detail
            </Link>
          </div>
        </figure>
        <div className={styles.productBody}>
          <div className={styles.productCategory}>
            {props.category} | {props.brand}
          </div>
          <div className={styles.productTitle}>{props.name}</div>
          <div className={styles.productPrice}>
            {props.price} vnd | {props.priceAfterSale} vnd
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
