import React from "react";

import Backdrop from "../UI/Backdrop";

import styles from "./ShoppingCart.module.css";

const ShoppingCart = (props) => {
  return (
    <React.Fragment>
      <div id="myShoppingCart" className={styles.shoppingCart}>
        <a className={styles.closeCartBtn} onClick={props.onCloseCart}>
          <i className="fas fa-times fa-sm"></i>
        </a>
        <a>About</a>
        <a>Services</a>
        <a>Clients</a>
        <a>Contact</a>
      </div>
      {/* <Backdrop onClick={props.onCloseCart} /> */}
    </React.Fragment>
  );
};

export default ShoppingCart;
