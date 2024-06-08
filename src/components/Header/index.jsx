import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";

export const Header = ({ setOpenBtn, setProductList, setValue, cartList }) => {

   const submit = (event) => {

      event.preventDefault();
      setProductList(value);
      setValue("");
      
    };

   return (

    <header>

      <div className={styles.header}>
      <div className={styles.headerDiv}>
      <img src={Logo} alt="Logo Kenzie Burguer" />

      <button onClick={() => setOpenBtn(true)} className="bbtnSm">
      
      <MdShoppingCart size={28} color="#BDBDBD" />
      
      <div className={styles.cartCountContainer}>
      
      <span className={styles.cartItemCount}>{cartList.length}</span>

      </div>
      
      </button>

      </div>
      
      </div>
    
    </header>

   );

};