import { useState } from "react";
import { useParams } from "react-router-dom";

import $ from "jquery";

import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const params = useParams();

  const [isHold, setIsHold] = useState(false);

  const holdImageHandler = () => {
    setIsHold(true);
  };
  const stopHoldImageHandler = () => {
    setIsHold(false);
  };

  const moveImageHandler = (event) => {
    let rect = event.target.getBoundingClientRect();
    var x = -event.clientX + rect.left;
    var y = -event.clientY + rect.top;
    $("#image-magnifying-move").css({
      transform: `translate(${x}px ,${y}px)`,
    });
  };

  const imageContentClasses = `${styles["image-content"]} ${
    isHold ? styles["image-content-hold"] : " "
  }`;
  const imageMagnifyingClasses = `${styles["image-magnifying"]} ${
    isHold ? styles["image-magnifying-hold"] : ""
  }`;
  return (
    <div className={styles.content}>
      <div className={`container ${styles["container-style"]}`}>
        <div className={styles["product-details"]}>
          <div className={`row ${styles["scale-single"]}`}>
            <div className="col-md-6">
              <div className={styles["product-gallery"]}>
                <div className="row m-0">
                  <figure className={styles["product-main-image"]}>
                    <span
                      className={`${styles.productLabel} ${styles.productLabelHot}`}
                    >
                      Hot
                    </span>
                    <span
                      className={`${styles.productLabel} ${styles.productLabelSale}`}
                    >
                      Sale
                    </span>
                    <div className={styles["zoom-image"]}>
                      <div
                        className={imageContentClasses}
                        onMouseOver={holdImageHandler}
                        onMouseOut={stopHoldImageHandler}
                        onMouseMove={moveImageHandler}
                      >
                        <img
                          src="https://goldievietnam.com/wp-content/uploads/2020/10/1-5-scaled-800x1000.jpg"
                          alt="product"
                        />
                        <div className={imageMagnifyingClasses}>
                          <img
                            id="image-magnifying-move"
                            src="https://goldievietnam.com/wp-content/uploads/2020/10/1-5-scaled-800x1000.jpg"
                            alt="product"
                          />
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
