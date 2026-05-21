/* eslint-disable react-hooks/set-state-in-render */

/* eslint-disable react-refresh/only-export-components */
import { createContext, useMemo, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addToCart = (product) => {
    const cartProduct = items.some((item) => item.id == product.id);
    if (!cartProduct) {
      setItems([...items, product]);
    }
  };

  const [isLogin, setIsLogin] = useState(true);
  
  //function to get stored token
  const getToken = () => {
    const token = localStorage.getItem("token")?true:false;
    setIsLogin(token);
  };

  useMemo(() => {
    getToken();
  }, []);



  const removeToCart=(product)=>{
       const afterRemovedProducts=items.filter((item)=>item.title!=product.title);
       setItems(afterRemovedProducts);
  }

  return (
    <CartContext.Provider value={{ items, addToCart,removeToCart,isLogin, setIsLogin }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;