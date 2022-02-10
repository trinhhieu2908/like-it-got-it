import styles from './CheckoutContent.module.css'

import CheckoutList from './CheckoutList';
import OrderInfo from './OrderInfo';

const CheckoutContent = () => {
    const submitOrderHandler = (customerInfo) => {
        console.log(customerInfo);
    }
    return <div className={styles.checkout}>
        <CheckoutList />
        <OrderInfo onSendOrder={submitOrderHandler}/>
    </div>
}

export default CheckoutContent;