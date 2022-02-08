import { useParams } from "react-router-dom";

import ProductGallery from "./ProductGallery";
import ProductDetailInformation from "./ProductDetailInformation";

import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const params = useParams();
  return (
    <div className={styles.content}>
      <div className={`container ${styles["container-style"]}`}>
        <div className={styles["product-detail"]}>
          <div className={`row ${styles["scale-single"]}`}>
            <div className="col-md-6">
              <ProductGallery />
            </div>
            <div className="col-md-6">
              <ProductDetailInformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
