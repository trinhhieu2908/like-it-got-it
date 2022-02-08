import CodIcon from '../../assets/IconCheckoutOption/cod.svg'
import BankIcon from '../../assets/IconCheckoutOption/bank.svg'

import styles from "./OrderInfo.module.css";

const OrderInfo = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles["content-header"]}>
          <h2>Order information</h2>
        </div>
        <div className={styles["input-content"]}>
          <div className={styles.field}>
            <div className={styles["field-input-wrapper"]}>
              <label
                className={styles["field-label"]}
                htmlFor="order-full-name"
              ></label>
              <input
                className={styles["field-input"]}
                id="order-full-name"
                type="text"
                placeholder="Full Name"
              ></input>
            </div>
          </div>
          <div className={`${styles.field} ${styles["field-two-third"]}`}>
            <div className={styles["field-input-wrapper"]}>
              <label
                className={styles["field-label"]}
                htmlFor="order-email"
              ></label>
              <input
                className={styles["field-input"]}
                id="order-email"
                type="email"
                placeholder="Email"
              ></input>
            </div>
          </div>
          <div className={`${styles.field} ${styles["field-one-third"]}`}>
            <div className={styles["field-input-wrapper"]}>
              <label
                className={styles["field-label"]}
                htmlFor="order-phone"
              ></label>
              <input
                disabled
                className={styles["field-input"]}
                id="order-phone"
                type="text"
                placeholder="Phone Number"
              ></input>
            </div>
          </div>
        </div>
        <div id="option-order">
          <div className={styles["option-shipping"]}>
            <h2>Way of shipping</h2>
            <div className={styles.content}>
              <div className={styles["content-box"]}>
                <div className={styles["content-box-row"]}>
                  <div className={styles["radio-wrapper"]}>
                    <label
                      className={`${styles["radio-label"]} ${styles["pd-4"]}`}
                    >
                      <div
                        className={`${styles["radio-input"]} ${styles["mt-10"]}`}
                      >
                        <input
                          className={styles["input-radio"]}
                          id="ship-at-door"
                          type="radio"
                          name="way-shipping"
                        ></input>
                        <span className={styles["radio-label-primary"]}>
                          Standard shipping
                        </span>
                      </div>
                      <span className={styles["radio-accessory"]}>0$</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["option-payment-method"]}>
            <h2>Payment method</h2>
            <div className={styles.content}>
              <div className={styles["content-box"]}>
                <div className={styles["content-box-row"]}>
                  <div className={styles["radio-wrapper"]}>
                    <label className={styles["radio-label"]}>
                      <div
                        className={`${styles["radio-input"]} ${styles["mt-20"]}`}
                      >
                        <input
                          className={styles["input-radio"]}
                          id="cod"
                          type="radio"
                          name="payment-method"
                          value="cod"
                        ></input>
                        <img
                          src={CodIcon}
                          alt="cod"
                        />
                        <span className={styles["radio-label-primary"]}>
                          Cash On Delivery (COD)
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className={styles["content-box-row"]}>
                  <div className={styles["radio-wrapper"]}>
                    <label className={styles["radio-label"]}>
                      <div
                        className={`${styles["radio-input"]} ${styles["mt-20"]}`}
                      >
                        <input
                          className={styles["input-radio"]}
                          id="bank"
                          type="radio"
                          name="payment-method"
                          value="bank"
                        ></input>
                        <img
                          src={BankIcon}
                          alt="bank"
                        ></img>
                        <span className={styles["radio-label-primary"]}>
                          Pay by Credit Card
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.orderButtonControl}>
        <a className={`btn btn-secondary ${styles.orderButton}`}>Order</a>
      </div>
    </div>
  );
};

export default OrderInfo;
