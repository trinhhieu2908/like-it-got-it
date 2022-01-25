import SupportItem from "./SupportItem";

import styles from "./Support.module.css";

const Support = () => {
  return (
    <div className={styles.area}>
      <div className="container">
        <div className="row">
          <SupportItem
            image="https://flone-react.pages.dev/assets/img/icon-img/support-1.png"
            title="Free Shipping"
            description="Free shipping on all orders"
          />
          <SupportItem
            image="https://flone-react.pages.dev/assets/img/icon-img/support-2.png"
            title="Support 24/7"
            description="Free shipping on all orders"
          />
          <SupportItem
            image="https://flone-react.pages.dev/assets/img/icon-img/support-3.png"
            title="Cheap product"
            description="Free shipping on all orders"
          />
          <SupportItem
            image="https://flone-react.pages.dev/assets/img/icon-img/support-4.png"
            title="Voucher"
            description="Free shipping on all orders"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
