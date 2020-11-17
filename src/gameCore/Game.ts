import { World, Engine } from "matter-js";
import Background from "./Background";
import Bird from "./Bird";
import { CanvasMap } from "./types";

class Game {
  bgCtx: CanvasRenderingContext2D | null = null;
  birdsCtx: CanvasRenderingContext2D | null = null;
  engine?: Engine;
  world?: World;
  background?: Background;
  bird?: Bird;

  constructor(canvasMap: CanvasMap) {
    const { bgCanvas, birdsCanvas } = canvasMap;
    this.setSize(bgCanvas);
    this.setSize(birdsCanvas);

    if (!bgCanvas.getContext || !birdsCanvas.getContext) {
      console.log("game didn't init");
      return;
    }

    this.bgCtx = bgCanvas.getContext("2d");
    this.birdsCtx = birdsCanvas.getContext("2d");

    if (!this.bgCtx || !this.birdsCtx) {
      console.log("game didn't init");
      return;
    }
    this.engine = Engine.create();
    this.world = this.engine.world;

    console.log("game inited");

    this.background = new Background(this.bgCtx);
    this.bird = new Bird(this.birdsCtx, this.world);
  }

  setSize(canvas: HTMLCanvasElement) {
    const { height, width } = canvas.getBoundingClientRect();

    canvas.width = width;
    canvas.height = height;
  }

  stasrGame() {
    console.log("game started");
    window.requestAnimationFrame(() => this.animate());
  }

  animate() {
    if (this.engine) {
      Engine.update(this.engine);
    }

    this.bird?.drawBird();
    window.requestAnimationFrame(() => this.animate());
  }
}

export default Game;
