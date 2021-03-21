import logo from "./logo.svg";
import "./App.css";

import Product from "./addcart";
import { useState } from "react";

function App() {
  let product = [
    {
      productName: "virtue",
      price: 72000,
      discription:
        "1.quality performance     2.warranty of upto 5years         3.free Insurance included",
        img:"https://vertuphones.in/image/thumbnails/18/85/vertu_aster_p_rococo_phones_in_india_png-100435-250x250.png",
    },
    {
      productName: "iphone",
      price: 120000,
      discription: "1.excellet performance  2.warranty upto 2years",
      img: "https://th.bing.com/th/id/OIP.TWgBkFbuv6P74-YkOnatfwHaHa?pid=ImgDet&rs=1",
    },
    {
      productName: "samsung",
      price: 95000,
      discription: "1.good performance     2.warranty upto 1years",
      img:"https://th.bing.com/th/id/R8301d4967f8251aeb31542f97f1e224f?rik=Pi%2fnibsAftdpGw&pid=ImgRaw",
    },
    {
      productName: "moto",
      price: 22000,
      discription: "1.good performance         2.warranty upto 1years",
      img:"https://th.bing.com/th/id/R17ce73388959d5d29e4fe9ebca345598?rik=I%2b%2f3Nt1mYyVNzQ&pid=ImgRaw",
    },
    
  ];
  const [cartItems, setCartItem] = useState([]);
  const [cartTotal, setTotal] = useState(0);
  function handleAddItems  (product)  {
    cartItems.push(product);
    setCartItem([...cartItems]);
    let grandTotal=parseFloat(cartTotal)+parseFloat(product.price);
console.log(grandTotal);
    setTotal(grandTotal.toFixed(2)) 
   };
  

  function handleRemove(index) {
    let newTotal=Math.floor(cartTotal-cartItems[index].price)
   setTotal(newTotal.toFixed(2))
    cartItems.splice(index, 1); // for removing from the list we used splice here(index,1)1 is how many u want to remove from list number
    setCartItem([...cartItems]);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div class="col-lg-3">
            <h1 class="my-4">Your Cart</h1>
            <div class="list-group">
              <ul class="list-group">
                {cartItems.map((product, index) => {
                  return (
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      {product.productName}-Rs{product.price}
                      <span
                        class=" btn btn-primary badge-pill"
                        onClick={() => handleRemove(index)}
                      >
                        Delete
                      </span>
                    </li>
                  );  
                })}
                
           
              </ul>
              <h5 class="bg-warning">Your Cart Value :{cartTotal}</h5>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {product.map(product => {
                return (
                  <Product
                    data={product}
                    handleAddItems={handleAddItems}
                  ></Product>
                )
               })
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
