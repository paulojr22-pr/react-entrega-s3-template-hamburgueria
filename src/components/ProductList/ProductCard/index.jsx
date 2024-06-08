import styles from "../ProductCard/style.module.scss";

export const ProductCard = ({ product, addFavorite }) => {
  
  return (

    <li className={styles.productCard}>

      <nav>

        <aside>

          <img src={product.img} alt={product.name} />

        </aside>
        
        <div>

          <h3 className="title three">{product.name}</h3>
        
          <p className="Headline capition">{product.category}</p>
        
          <span className="body">
            
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}

          </span>
        
          <button className="btnSm " onClick={() => addFavorite(product)}>
            Adicionar
        
          </button>
          
        </div>

      </nav>

    </li>

  );

};