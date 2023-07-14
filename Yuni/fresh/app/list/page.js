"use client";
import { useState } from "react";

export default function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];
  let [count, setCount] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {product.map((index, i) => (
        <div className="food" key={index}>
          <img src={`/food${i}.png`} className="food-img"></img>
          <h4>{product[i]} $40</h4>
          <span> {count} </span>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}
