import React from "react";


import { useSelector, useDispatch } from "react-redux";
import { searchProductActions } from "../../store/searchProduct";

import FormSearchProduct from "./FormSearchProduct";
import Backdrop from '../UI/Backdrop'

import styles from "./SearchProduct.module.css";

const SearchProduct = () => {
  const showProduct = useSelector(
    (state) => state.searchProduct.showSearchProduct
  );
  const dispatch = useDispatch();

  const CloseSearchProduct = () => {
    dispatch(searchProductActions.close());    
  };

  return (
    <div className={styles.search} id="search-product">
      <FormSearchProduct cardRestyle={styles.cardStyle} />
      {showProduct && <Backdrop onClick={CloseSearchProduct}/>}
    </div>
  );
};

export default SearchProduct;
