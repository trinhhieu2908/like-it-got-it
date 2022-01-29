import React from "react";

import MostPopular from "../../components/FilterProduct/MostPopular";
import Support from '../../components/ShopSupport/Support'
import ListProduct from '../../components/Products/ListProduct'
const Shop = () => {
  return (
    <div>
      <MostPopular />
      <Support />
      <ListProduct />
    </div>
  );
};
export default Shop;
