import React from "react";
import Cart from "./Cart";
import data from "./data";

export default function CartItems() {
  return (
    <>
    <div className="popular"><h1>Most Popular</h1></div>
    <div className="center">
      <div id="cart-items">
        {data.map((item, idx) => {
          return <Cart key={idx} item={item} />;
        })}
      </div>
    </div>
    </>
  );
}
