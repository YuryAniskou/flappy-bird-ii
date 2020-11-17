import React, { useEffect, useRef } from "react";
import Game from "../../gameCore/Game";
import "./Canvas.css";

function Canvas(): React.ReactElement {
  const bgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const birdsCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (bgCanvasRef.current && birdsCanvasRef.current) {
      const game = new Game({
        bgCanvas: bgCanvasRef.current,
        birdsCanvas: birdsCanvasRef.current,
      });
      game.stasrGame();
    }
  }, [bgCanvasRef, birdsCanvasRef]);

  return (
    <div className="game">
      <canvas ref={bgCanvasRef} className="Canvas"></canvas>
      <canvas ref={birdsCanvasRef} className="Canvas"></canvas>
    </div>
  );
}

export default Canvas;
