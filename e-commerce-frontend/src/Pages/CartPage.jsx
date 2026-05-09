import { useContext } from "react";
import { CartContext } from "../App";

const CartPage = (props) => {
  const { items } = useContext(CartContext);
  console.log(props.items);

  return (
    <div>
      {items.length <= 0 ? (
        <div className="text-center m-5 p-5">Products Not Added</div>
      ) : (
        items.forEach((product) => {console.log(product)})
      )}
    </div>
  );
};

export default CartPage;