import React, { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";

import useHttp from "../../hook/use-http";

import ProductGallery from "./ProductGallery";
import ProductDetailInformation from "./ProductDetailInformation";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const params = useParams();

  const [productDetail, setProductDetail] = useState({});
  const {
    isLoading: isLoadingProductDetail,
    error: productDetailHasError,
    sendRequest: fetchProductDetail,
  } = useHttp();

  const transformedProductDetail = useCallback((productDetail) => {
    const loadedProductDetail = {
      id: productDetail.id,
      name: productDetail.name,
      price: productDetail.price,
      category: productDetail.category.name,
      brand: productDetail.brand.name,
      description: productDetail.desc,
      isHot: productDetail.hot === 1,
      sale: productDetail.saleOff,
      image1: productDetail.images[0].url,
      image2: productDetail.images[1].url,
    };

    console.log(productDetail)
    console.log('all')

    setProductDetail(productDetail);
  }, []);

  const fetchProductDetailHandler = useCallback(() => {
    const requestConfigSubmitOrder = {      
      url: `/api/product/${params.productId}`,
    };
    fetchProductDetail(requestConfigSubmitOrder, transformedProductDetail);
    console.log("fetch")
  }, [fetchProductDetail, transformedProductDetail]);

  useEffect(() => {
    fetchProductDetailHandler();
    console.log("first load")
  }, [fetchProductDetailHandler]);

  let productContent;

  if (isLoadingProductDetail) {
    productContent = <LoadingSpinner />;
  }

  if (productDetailHasError) {
    <p>{productDetailHasError}</p>;
  }

  // if (!isLoadingProductDetail && !productDetailHasError) {
  //   productContent = (

  //   );
  // }

  console.log(productDetail)

  return (
    <div className={styles.content}>
      <div className={`container ${styles["container-style"]}`}>
        <div className={styles["product-detail"]}>
          <div className={`row ${styles["scale-single"]}`}>
            <div className="col-md-6">
              <ProductGallery />
            </div>
            <div className="col-md-6">
              <ProductDetailInformation
                name={productDetail.name}
                description={productDetail.description}
                price={productDetail.price}
                category={productDetail.category}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
