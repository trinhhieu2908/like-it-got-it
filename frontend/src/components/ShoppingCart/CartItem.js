import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={styles["cart-item"]}>
      <div className={styles["cart-item-info"]}>
        <img
          src={props.image}
          alt="A product"
        />
        <div className={styles.header}>
          <h2>{props.name}</h2>
          <h3>Size: {props.type}</h3>
          <div className={styles.summary}>
            <span className={styles.price}>{props.price}</span>
            <span className={styles.amount}>x 1</span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button>x</button>
        <div className={styles.actionsQuantity}>
          <button>−</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
