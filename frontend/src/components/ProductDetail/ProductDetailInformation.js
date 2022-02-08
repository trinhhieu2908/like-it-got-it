
import styles from './ProductDetailInformation.module.css'

const ProductDetailInformation = (props) => {
  return (
    <div className={styles["product-details"]}>
      <h1>{props.name}</h1>
      <div className={styles["product-price"]}>{props.price}</div>
      <div className={styles["product-description"]}>
        <p>
          {props.description}
        </p>
      </div>
      <div className={styles["product-size"]}>
        <label htmlFor="product-size">Size: </label>
        <div className={styles["selected-custom"]}>
          <select
            name="product-size"
            className={`form-control ${styles["select-form"]}`}
          >
            <option value="">Select a size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
      </div>
      <div className={styles["product-details-action"]}>
        <a className={styles.btnProduct}>
          <i className="fas fa-cart-plus"></i>
          ADD TO CART
        </a>
      </div>
      <div className={styles["product-details-footer"]}>
        <div className={styles["product-details-footer-category"]}>
          <span>Category: </span>
          <span>{props.category}</span>
        </div>
        <div className={styles["social-icons"]}>
          <span>Share: </span>
          <a className={styles["social-icon"]}>
            <i className="fab fa-facebook-f fa-xs"></i>
          </a>
          <a className={styles["social-icon"]}>
            <i className="fab fa-instagram fa-xs"></i>
          </a>
          <a className={styles["social-icon"]}>
            <i className="fab fa-facebook-messenger fa-xs"></i>
          </a>
          <a className={styles["social-icon"]}>
            <i className="fab fa-twitter fa-xs"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInformation;
