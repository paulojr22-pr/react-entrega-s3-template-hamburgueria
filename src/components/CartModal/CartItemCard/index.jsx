import { MdDelete } from "react-icons/md";
import styles from "../CartItemCard/style.module.scss";

export const CartItemCard = ({ product, removeFavorite }) => {

  return (

    <li className={styles.itemList}>
      
      <div className={styles.cardImg}>
        <img src={product.img} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      
      <span
        onClick={() => removeFavorite(product.id)}
        aria-label="delete"
        title="Remover item"
      >
        <MdDelete className="delet" size={21} color="gray" />

      </span>

    </li>

  );

};