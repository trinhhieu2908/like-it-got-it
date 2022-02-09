import React, { useState, useEffect, useCallback } from "react";

import ProductItem from "./ProductItem";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

import useHttp from "../../hook/use-http";

import styles from "./ListProduct.module.css";

const ListProduct = (props) => {
  const [listProduct, setListProduct] = useState([]);
  const [skipIndex, setSkipIndex] = useState(1);
  const [moreProductDisabled, setMoreProductDisabled] = useState(false);
  const {
    isLoading: isLoadingLoadedProduct,
    error: loadedProductHasError,
    sendRequest: fetchProductData,
  } = useHttp();

  const transformedProductData = useCallback((productData) => {
    const loadedProduct = [];
    // console.log(productData);
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
          priceAfterSale: productData[i].priceAfterSale,
          image1: productData[i].images[0].url,
          image2: productData[i].images[1].url,
          optionSize: productData[i].productOptions,
        });
      }
    }
    setListProduct(loadedProduct);
  }, []);

  // console.log(listProduct)

  const fetchProductDataHandler = useCallback(() => {
    let urlFetchProductData;
    if (props.category === null) {
      urlFetchProductData = `/api/product?skip=0&limit=1`;
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
    setSkipIndex(1);
    setMoreProductDisabled(false);
  }, [fetchProductDataHandler]);

  let listProductContent;

  if (isLoadingLoadedProduct) {
    listProductContent = <LoadingSpinner />;
  }

  if (loadedProductHasError) {
    listProductContent = <p>{loadedProductHasError}</p>;
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
            priceAfterSale={product.priceAfterSale}
            image1={product.image1}
            image2={product.image2}
            optionSize={product.optionSize}
          />
        ))}
      </div>
    );
  }

  const {
    isLoading: isLoadingMoreProduct,
    error: moreProductHasError,
    sendRequest: fetchProductMoreData,
  } = useHttp();

  const transformedProductMoreData = useCallback((productData) => {
    if(productData.length === 0){
      setMoreProductDisabled(true)
    }
    // console.log(moreProductDisabled);
    const loadedMoreProduct = [];
    // console.log(productData);
    if (productData != null) {
      for (let i = 0; i < productData.length; i++) {
        loadedMoreProduct.push({
          id: productData[i].id,
          name: productData[i].name,
          price: productData[i].price,
          category: productData[i].category.name,
          brand: productData[i].brand.name,
          description: productData[i].desc,
          isHot: productData[i].hot === 1,
          sale: productData[i].saleOff,
          priceAfterSale: productData[i].priceAfterSale,
          image1: productData[i].images[0].url,
          image2: productData[i].images[1].url,
          optionSize: productData[i].productOptions,
        });
      }
    }
    setListProduct((prevList) => prevList.concat(loadedMoreProduct));
  }, []);

  const moreProductHandler = () => {
    // console.log("index skip", skipIndex);
    let urlFetchProductData;
    if (props.category === null) {
      urlFetchProductData = `/api/product?skip=${skipIndex}&limit=1`;
    } else {
      urlFetchProductData = `/api/product/${props.category}`;
    }
    const requestConfigSubmitOrder = {
      url: urlFetchProductData,
    };
    fetchProductMoreData(requestConfigSubmitOrder, transformedProductMoreData);

    setSkipIndex((prevIndex) => prevIndex + 1);
  };

  let moreProductContent;

  if (isLoadingMoreProduct) {
    moreProductContent = <LoadingSpinner />;
  }

  if (moreProductHasError) {
    moreProductContent = <p>{loadedProductHasError}</p>;
  }
  return (
    <div className={styles.content}>
      <div className={`container ${styles.containerStyle}`}>
        <div className={styles.products}>{listProductContent}</div>
        {moreProductContent}
        {!moreProductDisabled && (
          <div className={styles["load-more"]}>
            <a className={styles["btn-load-more"]} onClick={moreProductHandler}>
              More Products<i className="fas fa-search-plus"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
