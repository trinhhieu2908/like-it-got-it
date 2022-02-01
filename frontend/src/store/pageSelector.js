import { createSlice } from "@reduxjs/toolkit";

import $ from "jquery";

const initialPageSelectorState = {
  currentPage: "home-page",
};

function animation() {
  var tabsNewAnim = $("#navbarPageContent");
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  if (itemPosNewAnimTop === undefined || itemPosNewAnimLeft === undefined) {
    return;
  } else {
    $("#page-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
  }
}

const pageSelectorSlice = createSlice({
  name: "pageSelector",
  initialState: initialPageSelectorState,
  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload;
      $("#navbarPageContent ul li a").removeClass("active");
      $(`#${state.currentPage}`).addClass("active");
      setTimeout(function () {
        animation();
      }, 200);
    },
    runAnimation() {
      animation();
    },
  },
});

export const pageSelectorActions = pageSelectorSlice.actions;
export default pageSelectorSlice.reducer;
