import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { v4 as uuidV4 } from 'uuid';

import { cartActions } from "../../store/cart";

import styles from "./CheckoutContent.module.css";

import useHttp from "../../hook/use-http";

import CheckoutList from "./CheckoutList";
import OrderInfo from "./OrderInfo";

const CheckoutContent = () => {
  const dispatch = useDispatch();

  const [submittingSuccess, setSubmittingSuccess] = useState(false);

  const itemCart = useSelector((state) => state.cart.items);
  const itemCartData = useSelector((state) => state.cart.itemsData);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const {
    isLoading: isSubmitting,
    error: submittingNotSuccess,
    sendRequest: fetchSubmitOrder,
  } = useHttp();

  const uuid = uuidV4();

  console.log(uuid)

  let totalPrice = 0;

  const itemsInOrder = itemCart.map((item) => {
    const existedCartItem = itemCartData.find(
      (itemData) => itemData.idProductOption === item.idProductOption
    );
    let itemInOrder = {};
    if (existedCartItem) {
      totalPrice = totalPrice + existedCartItem.price * item.quantity;
      const subtotal = existedCartItem.price * item.quantity;
      itemInOrder = {
        idOrder: uuid,
        idProductOption: item.idProductOption,
        price: existedCartItem.price,
        quantity: item.quantity,
        subtotal: subtotal,
      };
    }
    return itemInOrder;
  });

  console.log(itemsInOrder);

  const submitOrderHandler = (customerInfo) => {
    const order = {
      id: uuid,
      emailCustomer: customerInfo.email,
      numberOfProduct: totalQuantity,
      totalPrice: totalPrice,
      fullName: customerInfo.name,
      productDetail: itemsInOrder,
    };
    console.log(order);
    const requestConfigSubmitOrder = {
      url: "/api/order",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: order,
    };
    fetchSubmitOrder(requestConfigSubmitOrder);
    if (!submittingNotSuccess) {
      setSubmittingSuccess(true);
    } else {
      setSubmittingSuccess(false);
    }

    dispatch(cartActions.clearCart());
  };

  let OrderContent;

  if (itemCart.length === 0) {
    OrderContent = <p>There is no product in cart</p>;
  }
  if (itemCart.length > 0) {
    OrderContent = (
      <React.Fragment>
        <CheckoutList />
        <OrderInfo onSendOrder={submitOrderHandler} />
      </React.Fragment>
    );
  }

  let content = OrderContent;

  if (!isSubmitting && !submittingSuccess) {
    content = OrderContent;
  }

  if (isSubmitting) {
    content = <p>Sending order data...</p>;
  }

  if (!isSubmitting && submittingSuccess) {
    content = <p>Sending order successfully</p>;
  }

  return <div className={styles.checkout}>{content}</div>;
};

export default CheckoutContent;
