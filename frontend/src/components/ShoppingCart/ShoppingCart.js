import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { pageSelectorActions } from "../../store/pageSelector";
import { cartActions } from "../../store/cart";

import Backdrop from "../UI/Backdrop";
import CartItem from "./CartItem";

import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  function closeCart() {
    document.getElementById("myShoppingCart").style.width = "0";
    document.body.style.backgroundColor = "white";
    dispatch(cartActions.close());
  }

  const dispatch = useDispatch();

  const resetSelector = () => {
    closeCart();
    dispatch(pageSelectorActions.changePage("checkout-page"));
  };

  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <React.Fragment>
      <div id="myShoppingCart" className={styles.shoppingCart}>
        <div className={styles.header}>
          <h2>Your Cart</h2>
          <a className={styles.closeCartBtn} onClick={closeCart}>
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
              quantity="1"
            />
            <CartItem
              name="UpSideDown DENIM Pants/white"
              type="L"
              price="30$"
              image="https://goldievietnam.com/wp-content/uploads/2021/07/1233212-800x1000.jpg"
              quantity="1"
            />
            <CartItem
              name="Quarantine T-Shirt"
              type="L"
              price="15$"
              image="https://goldievietnam.com/wp-content/uploads/2020/05/IMG_0724-1500-X-2100-800x1120.jpg"
              quantity="3"
            />
            <CartItem
              name="Nike SB Dunk Low Grateful Dead Bears Opti Green"
              type="7.5 US"
              price="1000$"
              image="https://product.hstatic.net/200000289033/product/img01__60__b7aa7b6b2bfe47b0aca63656eb43d9eb_master.jpg"
              quantity="1"
            />
          </ul>
          <div className={styles.cartTotal}>
            <div className={styles.totalPrice}>
              Total Price:
              <span className={styles.totalPriceAmount}>
                <bdi>1100$</bdi>
              </span>
            </div>
          </div>
          <div className={styles.cartButtonControl}>
            <Link
              to="/checkout"
              className={`btn btn-secondary ${styles.cartButton}`}
              onClick={resetSelector}
            >
              Check out<i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
      </div>
      {showCart && <Backdrop onClick={closeCart} />}
    </React.Fragment>
  );
};

export default ShoppingCart;
