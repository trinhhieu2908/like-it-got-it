import React, { useState, useEffect, useCallback } from "react";

import ProductItem from "./ProductItem";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

import useHttp from "../../hook/use-http";

import styles from "./ListProduct.module.css";

const ListProduct = (props) => {
  const [listProduct, setListProduct] = useState([]);
  const {
    isLoading: isLoadingLoadedProduct,
    error: loadedProductHasError,
    sendRequest: fetchProductData,
  } = useHttp();

  const transformedProductData = useCallback((productData) => {
    const loadedProduct = [];
    
    if (productData != null) {
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

  // console.log(listProduct)

  const fetchProductDataHandler = useCallback(() => {
    let urlFetchProductData;
    if (props.category === null) {
      urlFetchProductData = "/api/product?skip=0";
    } else {
      urlFetchProductData = `/api/product/${props.category}`;
    }
    const requestConfigSubmitOrder = {
      url: urlFetchProductData,
    };
    fetchProductData(requestConfigSubmitOrder, transformedProductData);
  }, [fetchProductData, transformedProductData, props.category]);

  useEffect(() => {
    fetchProductDataHandler();
  }, [fetchProductDataHandler]);

  let listProductContent;

  if (isLoadingLoadedProduct) {
    listProductContent = <LoadingSpinner />;
  }

  if (loadedProductHasError) {
    <p>{loadedProductHasError}</p>;
  }

  if (!isLoadingLoadedProduct && !loadedProductHasError) {
    listProductContent = (
      <div className="row">
        {listProduct.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            brand={product.brand}
            isHot={product.isHot}
            sale={product.sale}
            image1={product.image1}
            image2={product.image2}
          />
        ))}
        ;
      </div>
    );
  }

  const moreProductHandler = () => {
    console.log("skip 12");
  };
  return (
    <div className={styles.content}>
      <div className={`container ${styles.containerStyle}`}>
        <div className={styles.products}>{listProductContent}</div>
        <div className={styles["load-more"]}>
          <a className={styles["btn-load-more"]} onClick={moreProductHandler}>
            More Products<i className="fas fa-search-plus"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
