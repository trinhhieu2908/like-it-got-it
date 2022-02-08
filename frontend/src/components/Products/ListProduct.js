

import ProductItem from "./ProductItem";

import styles from "./ListProduct.module.css";


const ListProduct = (props) => { 
  return (
    <div className={styles.content}>
      <div className={`container ${styles.containerStyle}`}>
        <div className={styles.products}>
          <div className="row">
            {props.products.map((product) => (
              <ProductItem
                key={product.id}
                category={product.category}
                name={product.name}
                price={product.price}
                image1={product.image1}
                image2={product.image2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
