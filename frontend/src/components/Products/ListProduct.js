import ProductItem from "./ProductItem";

import styles from "./ListProduct.module.css";

const ListProduct = (props) => {
  // props.products.map((product) => {
  //   console.log(product);
  // })
  return (
    <div className={styles.content}>
      <div className={`container ${styles.containerStyle}`}>
        <div className={styles.products}>
          <div className="row">
            {props.products.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                brand={product.brand}
                isHot={product.isHot}
                sale={product.sale}
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
