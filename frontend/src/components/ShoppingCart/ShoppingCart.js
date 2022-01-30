import React from "react";

import { useSelector } from "react-redux";

import Backdrop from "../UI/Backdrop";
import CartItem from "./CartItem";

import styles from "./ShoppingCart.module.css";

const ShoppingCart = (props) => {
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <React.Fragment>
      <div id="myShoppingCart" className={styles.shoppingCart}>
        <div className={styles.header}>
          <h2>Your Cart</h2>
          <a className={styles.closeCartBtn} onClick={props.onCloseCart}>
            <i className="fas fa-times fa-sm"></i>
          </a>
        </div>
        <hr></hr>
        <div className={styles.cartContent}>
          <ul className={styles["cart-items"]}>
            <CartItem
              name="Iron logo suede hoodie"
              type="L"
              price="25$"
              image="https://goldievietnam.com/wp-content/uploads/2020/10/1-5-scaled-800x1000.jpg"
            />
            <CartItem
              name="UpSideDown DENIM Pants/white"
              type="L"
              price="30$"
              image="https://goldievietnam.com/wp-content/uploads/2021/07/1233212-800x1000.jpg"
            />
            <CartItem
              name="Quarantine T-Shirt"
              type="L"
              price="15$"
              image="https://goldievietnam.com/wp-content/uploads/2020/05/IMG_0724-1500-X-2100-800x1120.jpg"
            />
            <CartItem
              name="Nike SB Dunk Low Grateful Dead Bears Opti Green"
              type="7.5 US"
              price="1000$"
              image="https://product.hstatic.net/200000289033/product/img01__60__b7aa7b6b2bfe47b0aca63656eb43d9eb_master.jpg"
            />
          </ul>
          <div className={styles.cartTotal}>
            <div className={styles.totalPrice}>
              Total Price:
              <span className={styles.totalPriceAmount}>
                <bdi>489$</bdi>
              </span>
            </div>
          </div>
          <div className={styles.cartButtonControl}>            
            <a className={`btn btn-secondary ${styles.cartButton}`}>
              Check out<i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>
      {showCart && <Backdrop onClick={props.onCloseCart} />}
    </React.Fragment>
  );
};

export default ShoppingCart;
