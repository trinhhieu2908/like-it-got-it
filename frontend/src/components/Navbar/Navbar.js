import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import $ from "jquery";

import PageOption from './PageOption'
import SidebarPageOption from './SidebarPageOption'
import ButtonOption from './ButtonOption'
import NavLogo from "./NavLogo"

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

  function openSidebarPageOption() {
    document.getElementById("mySidebarPageOption").style.width = "50%";
    document.getElementById("main").style.marginLeft = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  function closeSidebarPageOption() {
    document.getElementById("mySidebarPageOption").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
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
      <SidebarPageOption onClose={closeSidebarPageOption}/>
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
        <ButtonOption onOpenSidebar={openSidebarPageOption}/>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
