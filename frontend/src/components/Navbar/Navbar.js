import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import $ from "jquery";

import PageOption from "./PageOption";
import ButtonOption from "./ButtonOption";
import NavLogo from "./NavLogo";
import SearchProduct from "../SearchProduct/SearchProduct";

const Navbar = () => {
  function animation() {
    var tabsNewAnim = $("#navbarPageContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $("#page-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarPageContent").on("click", "li", function (e) {
      $("#navbarPageContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $("#page-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <React.Fragment>
      <nav
        className={`navbar navbar-expand-lg ${styles["navbar-mainBackGround"]}`}
      >
        <NavLogo />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className={styles.navbarPageContent} id="navbarPageContent">
            <ul className="navbar-nav ml-auto">
              <div className={styles["page-selector"]} id="page-selector">
                <div className={styles.left}></div>
                <div className={styles.right}></div>
              </div>
              <PageOption />
            </ul>
          </div>
        </div>
        <ButtonOption />
      </nav>
      <SearchProduct />
    </React.Fragment>
  );
};
export default Navbar;
