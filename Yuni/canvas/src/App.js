import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { CirclePicker } from "react-color";

function App() {
  const canvasRef = useRef(null);
  const [getCtx, setGetCtx] = useState(null);
  const [painting, setPainting] = useState(false);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    // canvas useRef
    const canvas = canvasRef.current;
    canvas.width = 650;
    canvas.height = 540;
    const ctx = canvas.getContext("2d");
    ctx.lineJoin = "round";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#000000";

    setGetCtx(ctx);
  }, []);

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor.hex);
  };

  const drawFn = (e) => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;
    if (!painting) {
      getCtx.beginPath();
      getCtx.moveTo(mouseX, mouseY);
    } else {
      getCtx.lineTo(mouseX, mouseY);
      getCtx.strokeStyle = color;
      getCtx.stroke();
    }
  };
  return (
    <>
      <div className="container">
        <canvas
          className="canvas"
          ref={canvasRef}
          onMouseDown={() => setPainting(true)}
          onMouseUp={() => setPainting(false)}
          onMouseMove={(e) => drawFn(e)}
          onMouseLeave={() => setPainting(false)}
        ></canvas>
      </div>
      <CirclePicker color={color} onChange={handleColorChange} />
    </>
  );
}

export default App;
