import React from "react";
import { NavLink } from "react-router-dom";

const PageOption = (props) => {
  return (
    <React.Fragment>
      <li className="nav-item" onClick={props.onClose} id='home'>
        <NavLink className="nav-link" to="/" exact>
          <i className="fas fa-tachometer-alt"></i>Home
        </NavLink>
      </li>
      <li className="nav-item" onClick={props.onClose} id='shop'>
        <NavLink className="nav-link" to="/shop" exact>
          <i className="fas fa-store"></i>Shop
        </NavLink>
      </li>
      <li className="nav-item" onClick={props.onClose}>
        <NavLink className="nav-link" to="/checkout" exact>
          <i className="fas fa-money-bill-wave"></i>Checkout
        </NavLink>
      </li>
      <li className="nav-item" onClick={props.onClose}>
        <NavLink className="nav-link" to="/about" exact>
          <i className="fas fa-info-circle"></i>About
        </NavLink>
      </li>
      <li className="nav-item" onClick={props.onClose}>
        <NavLink className="nav-link" to="/contact" exact>
          <i className="far fa-address-book"></i>Contact Us
        </NavLink>
      </li>
    </React.Fragment>
  );
};

export default PageOption;
