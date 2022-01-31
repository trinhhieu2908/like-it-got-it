import React from "react";

import MostPopular from "../../components/FilterProduct/MostPopular";
import Support from "../../components/ShopSupport/Support";
import ListProduct from "../../components/Products/ListProduct";
const Shop = () => {
  return (
    <React.Fragment>
      <MostPopular />
      <Support />
      <ListProduct />
    </React.Fragment>
  );
};
export default Shop;
