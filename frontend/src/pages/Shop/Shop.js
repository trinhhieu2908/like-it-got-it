import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MostPopular from "../../components/FilterProduct/MostPopular";
import Support from "../../components/ShopSupport/Support";
import ListProduct from "../../components/Products/ListProduct";

import ProductDetail from "../../components/ProductDetail/ProductDetail";
const Shop = () => {
  return (
    <React.Fragment>
      <MostPopular />
      <Switch>
        <Route path="/shop" exact>
          <Redirect to="/shop/products" />
        </Route>
        <Route path="/shop/products" exact>
          <Support />
          <ListProduct />
        </Route>
        <Route path="/shop/detail/:productId" exact>
          <ProductDetail />
        </Route>
      </Switch>
    </React.Fragment>
  );
};
export default Shop;
