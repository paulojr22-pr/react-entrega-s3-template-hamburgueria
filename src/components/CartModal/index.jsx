import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "../CartModal/style.module.scss";
import { useOutclick } from "../../hooks/userOutClick";
import { useKeydown } from "../../hooks/userKeydown";

export const CartModal = ({

  cartList,
  setOpenBtn,
  removeFavorite,
  setCartList,

}) => {
  
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  const modalRef = useOutclick(() => {
    setOpenBtn(false);
  });

  const buttonRef = useKeydown("Escape", () => {
    setOpenBtn(false);
  });

  return (
    <div className={styles.modalOverlay} role="dialog">
      <div ref={modalRef} className={styles.modalBox}>
        <aside>
          <h2 className="title three ">Carrinho de compras</h2>
          <button
            ref={buttonRef}
            className={styles.closeButton}
            aria-label="close"
            title="Fechar"
            onClick={() => setOpenBtn(false)}
          >
            <MdClose size={21} />
          </button>
        </aside>
        <div>
          <ul>
            {cartList.length === 0 ? (
              <p className="title three">Carrinho Vazio 😕❌</p>
            ) : (
              cartList.map((product) => (
                <CartItemCard
                  key={product.id}
                  product={product}
                  removeFavorite={removeFavorite}
                />
              ))
            )}
          </ul>
          <div>
            <nav>
              <p className="body">Total</p>
              <span className="body">
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </nav>
            <button
              className="btnBig"
              onClick={() => {
                setCartList([]);
              }}
            >
              Remover todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};