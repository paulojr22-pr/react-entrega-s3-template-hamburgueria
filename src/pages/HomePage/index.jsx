import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { Api } from "../../services/api";
import { toast } from "react-toastify";

export const HomePage = () => {

  const localStorageCart = localStorage.getItem("@CARTLIST");
  const [productList, setProductList] = useState([]);
  const [openBtn, setOpenBtn] = useState(false);
  const [value, setValue] = useState("");
  const [cartList, setCartList] = useState(
    localStorageCart ? JSON.parse(localStorageCart) : []

  );

  useEffect(() => {

    localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
  }, [cartList]);

  useEffect(() => {

    const getProductsList = async () => {

      try {
        const { data } = await Api.get("products");
        setProductList(data);
      } catch (error) {}

    };

    getProductsList();

  }, []);

  const addFavorite = (addingfavorite) => {

    if (!cartList.some((favorite) => favorite.id === addingfavorite.id)) {
      setCartList([...cartList, addingfavorite]);
      toast.success("Adicionado no Carrinho ❤️");
    } else {
      toast.error("Esse produto já foi adicionado 😉👍");
    }
    
  };

  const removeFavorite = (favoriteId) => {
    const newfavoriteList = cartList.filter(
      (favorite) => favorite.id !== favoriteId
    );
    setCartList(newfavoriteList);
    toast.success("Removido do Carrinho 😉");

  };

  const resultBusc = productList.filter((product) => {

    if (value === "") {
      return true;
    }

    return product.name.toLowerCase().includes(value.toLowerCase());

  });

  return (
    <>
      <Header
        setOpenBtn={setOpenBtn}
        setProductList={setProductList}
        productList={productList}
        setValue={setValue}
        cartList={cartList}
      />

      {openBtn && (
        <CartModal
          setCartList={setCartList}
          removeFavorite={removeFavorite}
          cartList={cartList}
          setOpenBtn={setOpenBtn}
          openBtn={openBtn}
        />
      )}

      <main>
        <ProductList productList={resultBusc} addFavorite={addFavorite} />
      </main>

    </>
    
  );

};