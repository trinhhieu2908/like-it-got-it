import styles from "./CheckoutList.module.css";

import CheckoutProductItem from "./CheckoutProductItem";

const CheckoutList = () => {
  return (
    <div className={styles.list}>
      <div className={styles.content}>
        <h2>Your order</h2>
        <hr></hr>
        <div className={styles.overflow}>
          <table className={styles["product-table"]}>
            <tbody>
              <CheckoutProductItem
                name="Iron logo suede hoodie"
                type="L"
                price="25$"
                image="https://goldievietnam.com/wp-content/uploads/2020/10/1-5-scaled-800x1000.jpg"
                quantity="1"
                totalPrice="25$"
              />
              <CheckoutProductItem
                name="UpSideDown DENIM Pants/white"
                type="L"
                price="30$"
                image="https://goldievietnam.com/wp-content/uploads/2021/07/1233212-800x1000.jpg"
                quantity="1"
                totalPrice="30$"
              />
              <CheckoutProductItem
                name="Quarantine T-Shirt"
                type="L"
                price="15$"
                image="https://goldievietnam.com/wp-content/uploads/2020/05/IMG_0724-1500-X-2100-800x1120.jpg"
                quantity="3"
                totalPrice="45$"
              />
              <CheckoutProductItem
                name="Nike SB Dunk Low Grateful Dead Bears Opti Green"
                type="7.5 US"
                price="1000$"
                image="https://product.hstatic.net/200000289033/product/img01__60__b7aa7b6b2bfe47b0aca63656eb43d9eb_master.jpg"
                quantity="1"
                totalPrice="1000$"
              />
            </tbody>
          </table>
        </div>
        <hr></hr>
        <div className={styles.total}>
          <div className={styles.totalPrice}>
            Subtotal:
            <span className={styles.totalPriceAmount}>
              <bdi>1100$</bdi>
            </span>
          </div>
          <div className={styles.totalShipping}>
            Shipping:
            <span className={styles.shipping}>
              <bdi>—</bdi>
            </span>
          </div>
        </div>
        <hr></hr>
        <div className={styles.total}>
          <div className={styles.totalPrice}>
            Total:
            <span className={styles.totalPriceAmount}>
              <bdi>1100$</bdi>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutList;
