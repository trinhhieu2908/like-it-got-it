import React, { useState, useEffect, useCallback } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";

import useHttp from "../../hook/use-http";

import MostPopular from "../../components/FilterProduct/MostPopular";
import Support from "../../components/ShopSupport/Support";
import ListProduct from "../../components/Products/ListProduct";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import LoadingSpinner from '../../components/UI/LoadingSpinner'

// const loadedProducts = [
//   {
//     id: 1,
//     category: "Tee",
//     name: "Quarantine T-Shirt",
//     price: "$15",
//     image1:
//       "https://goldievietnam.com/wp-content/uploads/2020/05/IMG_0724-1500-X-2100-800x1120.jpg",
//     image2:
//       "https://goldievietnam.com/wp-content/uploads/2020/05/IMG_0731-1500-X-2100-800x1120.jpg",
//   },
//   {
//     id: 2,
//     category: "Hoodie",
//     name: "Iron logo suede hoodie",
//     price: "$25",
//     image1:
//       "https://goldievietnam.com/wp-content/uploads/2020/10/1-5-scaled-800x1000.jpg",
//     image2:
//       "https://goldievietnam.com/wp-content/uploads/2020/10/2-5-scaled-800x1000.jpg",
//   },
//   {
//     id: 3,
//     category: "Pants",
//     name: "UpSideDown DENIM Pants/white",
//     price: "$30",
//     image1:
//       "https://goldievietnam.com/wp-content/uploads/2021/07/1233212-800x1000.jpg",
//     image2:
//       "https://goldievietnam.com/wp-content/uploads/2021/07/04d6205b79f28dacd4e32-800x1000.jpg",
//   },
//   {
//     id: 4,
//     category: "Shoes",
//     name: "Jordan 1 High Atmosphere",
//     price: "$290",
//     image1:
//       "https://product.hstatic.net/200000289033/product/img01_-_2022-01-11t072539.919_b0becddc3027489b86485d2f563c5a7d_master.jpg",
//     image2:
//       "https://product.hstatic.net/200000289033/product/img05__86__698862b099c04b489445cf387f127652_master.jpg",
//   },
//   {
//     id: 5,
//     category: "Shoes",
//     name: "Nike SB Dunk Low Grateful Dead Bears Opti Green",
//     price: "$1000",
//     image1:
//       "https://product.hstatic.net/200000289033/product/img01__60__b7aa7b6b2bfe47b0aca63656eb43d9eb_master.jpg",
//     image2:
//       "https://product.hstatic.net/200000289033/product/img05__45__9db8a19c6ef241268fa283f454a60fc2_master.jpg",
//   },
// ];

// const filterProduct = (products, category) => {
//   if (category === null) {
//     return products;
//   } else {
//     const productFilter = products.filter((product) => {
//       return product.category.toLowerCase() === category.toLowerCase();
//     });
//     return productFilter;
//   }
// };
const Shop = () => {
  const location = useLocation();

  const [listProduct, setListProduct] = useState([]);
  const {
    isLoading: isLoadingLoadedProduct,
    error: loadedProductHasError,
    sendRequest: fetchProductData,
  } = useHttp();

  const transformedProductData = useCallback((productData) => {
    const loadedProduct = [];

    if (productData != null) {
      // console.log(productData);

      for (let i = 0; i < productData.length; i++) {
        loadedProduct.push({
          id: productData[i].id,
          name: productData[i].name,
          price: productData[i].price,
          category: productData[i].category.name,
          brand: productData[i].brand.name,
          description: productData[i].desc,
          isHot: productData[i].hot === 1,
          sale: productData[i].saleOff,
          image1: productData[i].images[0].url,
          image2: productData[i].images[1].url,
        });
      }
    }

    setListProduct(loadedProduct);
  }, []);

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  // const productFilter = filterProduct(loadedProducts, category);

  const fetchProductDataHandler = useCallback(() => {
    let urlFetchProductData;
    if (category === null) {
      urlFetchProductData = "/api/product";
    } else {
      urlFetchProductData = `/api/product/${category}`;
    }
    const requestConfigSubmitOrder = {
      url: urlFetchProductData,
    };
    fetchProductData(requestConfigSubmitOrder, transformedProductData);
  }, [fetchProductData, transformedProductData, category]);

  useEffect(() => {
    fetchProductDataHandler();
  }, [fetchProductDataHandler]);

  // console.log(listProduct);

  let listProductContent;

  if(isLoadingLoadedProduct){
    listProductContent = <LoadingSpinner />
  }

  if(loadedProductHasError) {
    <p>{loadedProductHasError}</p>
  }

  if(!isLoadingLoadedProduct && !loadedProductHasError) {
    listProductContent = <ListProduct products={listProduct} />
  }

  return (
    <React.Fragment>
      <MostPopular />
      <Switch>
        <Route path="/shop" exact>
          <Redirect to="/shop/products" />
        </Route>
        <Route path="/shop/products" exact>
          <Support />
          {listProductContent}
        </Route>
        <Route path="/shop/detail/:productId" exact>
          <ProductDetail />
        </Route>
      </Switch>
    </React.Fragment>
  );
};
export default Shop;
