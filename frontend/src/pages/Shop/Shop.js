import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";

import MostPopular from "../../components/FilterProduct/MostPopular";
import Support from "../../components/ShopSupport/Support";
import ListProduct from "../../components/Products/ListProduct";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const Shop = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const search = queryParams.get("search");

  const NotFound = React.lazy(() => import("../../pages/NotFound/NotFound"));

  return (
    <React.Fragment>
      <MostPopular />
      <Switch>
        <Route path="/shop" exact>
          <Redirect to="/shop/products" />
        </Route>
        <Route path="/shop/products" exact>
          <Support />
          <ListProduct category={category} search={search}/>
        </Route>
        <Route path="/shop/detail/:productId" exact>
          <ProductDetail />
        </Route>
        <Route path="/shop/*">
          <NotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
};
export default Shop;
