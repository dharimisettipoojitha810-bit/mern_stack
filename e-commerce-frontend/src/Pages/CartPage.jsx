import { useContext, useState } from "react";
import { CartContext } from "../service/CartProvider";

const CartPage = () => {
  const { items,removeToCart } = useContext(CartContext);
  const [inputText, setInputText] = useState();
  const [filterProducts, setFilterProducts] = useState(items);


  console.log(items);
  

  const handleFilter = (e) => {
    setInputText(e.target.value);
    let filteredItems = items.filter((matchedProduct) =>
      matchedProduct.title.includes(inputText.toLowerCase().trim()),
    );
    console.log(filteredItems);
    setFilterProducts(filteredItems);
  };


  return (
    <>
      <div id="filter-div">
        <input
          type="text"
          onChange={handleFilter}
          placeholder="Search Products"
        />
      </div>

      <div id="cart-products">
        {items.length <= 0 ? (
          <div className="text-center m-5 p-5">Products Not Added</div>
        ) : (
          filterProducts.map((product) => (
            <div id="products">
              <img src={product.imageSrc} alt="" />
              <h1>Title:{product.title}</h1>
              <button onClick={()=>{
                removeToCart(product)
                setFilterProducts(items)
              }}>Remove cart</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CartPage;