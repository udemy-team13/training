import React from "react";
import image from "./img/1.jpg";

export default function Image() {
  const images = ["./img/1.jpg"];
  return (
    <>
      <div>
        <img
          style={{ width: "960px", height: "600px" }}
          src={image}
          alt="img"
        />
      </div>
      <button>Prev</button>
      <button>Next</button>
    </>
  );
}
