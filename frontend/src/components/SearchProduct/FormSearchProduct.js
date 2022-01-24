import Card from "../UI/Card";

import styles from './FormSearchProduct.module.css'

const FormSearchProduct = (props) => {
  return (
    <Card restyle={props.cardRestyle}>
      <form className={styles.form}>
        <p className={styles.title}>Search for products</p>
        <div className={styles.control}>
          <label htmlFor="name"></label>
          <input type="text" id="search-product" placeholder="Type here to search"/>
        </div>
        <hr className={styles.line}/>
      </form>
    </Card>
  );
};

export default FormSearchProduct;
