import React, { useState } from "react";

export default function Number() {
  const [number, setNumber] = useState("");

  const handleClick = () => {
    const random = Math.floor(Math.random() * 100);
    setNumber(random.toString());
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          height: "300px",
          backgroundColor: "greenyellow",
          borderRadius: "50%",
          color: "black",
          fontSize: "100px",
          textAlign: "center",
        }}
      >
        {number}
      </div>
      <button onClick={handleClick}>Click!</button>
    </>
  );
}
