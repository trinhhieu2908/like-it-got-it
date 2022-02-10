import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (event) => {
    event.preventDefault();
    dispatch(
      cartActions.addItemToCart({
        item: { idProductOption: props.id, quantity: 1 },
      })
    );
  };

  const removeFromCartHandler = (event) => {
    event.preventDefault();
    dispatch(cartActions.removeItemFromCart({ idProductOption: props.id }));
  };

  const clearItemInCartHandler = (event) => {
    event.preventDefault();
    dispatch(cartActions.clearItemInCart({ idProductOption: props.id }));
  }

  return (
    <li className={styles["cart-item"]}>
      <div className={styles["cart-item-info"]}>
        <img src={props.image} alt="A product" />
        <div className={styles.header}>
          <h2>{props.name}</h2>
          <h3>Size: {props.type}</h3>
          <div className={styles.summary}>
            <span className={styles.price}>{props.price}</span>
            <button onClick={removeFromCartHandler}>−</button>
            <span className={styles.amount}>x {props.quantity}</span>
            <button onClick={addToCartHandler}>+</button>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={clearItemInCartHandler}>x</button>
      </div>
    </li>
  );
};

export default CartItem;
