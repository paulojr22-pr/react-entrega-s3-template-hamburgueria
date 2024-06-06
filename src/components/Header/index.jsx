import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";

export const Header = () => {
   const [value, setValue] = useState("");

   return (

      <header className={styles.header}>

         <div className={styles.headerDiv}>

            <img src={Logo} alt="Logo Kenzie Burguer" />

            <button>
            
                <MdShoppingCart size={21} />
                <span>0</span>
            
            </button>
            
         </div>

      </header>
   );
};