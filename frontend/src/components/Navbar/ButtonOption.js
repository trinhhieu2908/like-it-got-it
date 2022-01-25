
import { useDispatch } from "react-redux";
import { searchProductActions } from "../../store/searchProduct";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import SidebarPageOption from "./SidebarPageOption";
import Login from "../Login/Login";

import styles from "./ButtonOption.module.css";

const ButtonOption = () => {
  const dispatch = useDispatch();

  const openSidebarPageOption = () => {
    document.getElementById("mySidebarPageOption").style.width = "50%";
    document.getElementById("main").style.marginLeft = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  };

  function closeSidebarPageOption() {
    document.getElementById("mySidebarPageOption").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

  const mediaMaxWidth550 = window.matchMedia("(max-width: 550px)");

  function openCart() {
    if (mediaMaxWidth550.matches) {
      document.getElementById("myShoppingCart").style.width = "100%";
    } else {
      document.getElementById("myShoppingCart").style.width = "45%";
    }
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  function closeCart() {
    document.getElementById("myShoppingCart").style.width = "0";
    document.body.style.backgroundColor = "white";
  }

  function openSearchProduct() {
    dispatch(searchProductActions.open());    
  }

  return (
    <div className={styles["navbar-btn"]}>
      <a
        className={`nav-link ${styles["nav-option-btn"]}`}
        onClick={openSearchProduct}
      >
        <i className="fas fa-search"></i>
      </a>
      <a className={`nav-link ${styles["nav-option-btn"]}`} onClick={openCart}>
        <i className="fas fa-shopping-cart"></i>
      </a>
      <ShoppingCart onCloseCart={closeCart} />
      <Login btnOptionStyle={styles["nav-option-btn"]} />
      <button
        className={`navbar-toggler`}
        onClick={openSidebarPageOption}
        type="button"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <SidebarPageOption onClose={closeSidebarPageOption} />
    </div>
  );
};

export default ButtonOption;
