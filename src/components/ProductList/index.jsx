import { ProductCard } from "./ProductCard";
import styles from "../ProductList/style.module.scss";

export const ProductList = ({ productList, addFavorite }) => {

  return (

    <ul className={styles.productBox}>

      {productList.map((product) => (
        <ProductCard
        
          key={product.id}
          product={product}
          addFavorite={addFavorite}

        />

      ))}
      
    </ul>
    
  );

};