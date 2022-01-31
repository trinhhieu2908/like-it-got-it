import styles from './CheckoutContent.module.css'

import CheckoutList from './CheckoutList';
import OrderInfo from './OrderInfo';

const CheckoutContent = () => {
    return <div className={styles.checkout}>
        <CheckoutList />
        <OrderInfo />
    </div>
}

export default CheckoutContent;