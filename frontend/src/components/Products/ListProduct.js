import ProductItem from "./ProductItem";

import styles from "./ListProduct.module.css";

const ListProduct = () => {
  return (
    <div className={styles.content}>
      <div className={`container ${styles.containerStyle}`}>
        <div className={styles.products}>
          <div className="row">
            <ProductItem
              category="Tee"
              name="Quarantine T-Shirt"
              price="$15"
              image1="https://goldievietnam.com/wp-content/uploads/2020/05/IMG_0724-1500-X-2100-800x1120.jpg"
              image2="https://goldievietnam.com/wp-content/uploads/2020/05/IMG_0731-1500-X-2100-800x1120.jpg"
            />
            <ProductItem
              category="hoodie"
              name="Iron logo suede hoodie"
              price="$25"
              image1="https://goldievietnam.com/wp-content/uploads/2020/10/1-5-scaled-800x1000.jpg"
              image2="https://goldievietnam.com/wp-content/uploads/2020/10/2-5-scaled-800x1000.jpg"
            />
            <ProductItem
              category="pants"
              name="UpSideDown DENIM Pants/white"
              price="$30"
              image1="https://goldievietnam.com/wp-content/uploads/2021/07/1233212-800x1000.jpg"
              image2="https://goldievietnam.com/wp-content/uploads/2021/07/04d6205b79f28dacd4e32-800x1000.jpg"
            />
            <ProductItem
              category="shoes"
              name="Jordan 1 High Atmosphere"
              price="$290"
              image1="https://product.hstatic.net/200000289033/product/img01_-_2022-01-11t072539.919_b0becddc3027489b86485d2f563c5a7d_master.jpg"
              image2="https://product.hstatic.net/200000289033/product/img05__86__698862b099c04b489445cf387f127652_master.jpg"
            />
            <ProductItem
              category="shoes"
              name="Nike SB Dunk Low Grateful Dead Bears Opti Green"
              price="$1000"
              image1="https://product.hstatic.net/200000289033/product/img01__60__b7aa7b6b2bfe47b0aca63656eb43d9eb_master.jpg"
              image2="https://product.hstatic.net/200000289033/product/img05__45__9db8a19c6ef241268fa283f454a60fc2_master.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
