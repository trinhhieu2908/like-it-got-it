import React, { useEffect } from "react";
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
  const itemCart = useSelector((state) => state.cart.items);

  // useEffect(() => {
  //   localStorage.setItem("cart", []);
  // },[])

  // useEffect(() => {
  //   localStorage.setItem("cart", itemCart);
  // },[itemCart])

  console.log(itemCart);

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
            {itemCart.map((item) => (
              <CartItem
                key={item.idProductOption}
                id={item.idProductOption}
                name="UpSideDown DENIM Pants/white"
                type={item.idProductOption}
                price="30$"
                image="https://goldievietnam.com/wp-content/uploads/2021/07/1233212-800x1000.jpg"
                quantity={item.quantity}
              />
            ))}
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
