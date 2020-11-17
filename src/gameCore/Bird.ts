import { Bodies, Body, Engine, World, Vector } from "matter-js";
import { Point } from "./types";

class Bird {
  world: World;
  engine: Engine;
  body: Body;
  ctx: CanvasRenderingContext2D;
  birdColor: string = "rgb(255, 255, 255)";
  position: Point;
  moveSpead: number = 2;
  isFly: boolean = false;
  counter: number = 0;

  private initPosition(): Point {
    const { height } = this.ctx.canvas;
    const yPosition: number = (height - 100) / 2;

    return {
      x: 100,
      y: yPosition,
    };
  }

  constructor(
    ctx: CanvasRenderingContext2D,
    world: World,
    engine: Engine,
    position?: Point
  ) {
    this.world = world;
    this.engine = engine;
    this.ctx = ctx;
    this.position = position ? position : this.initPosition();

    this.body = Bodies.circle(this.position.x, this.position.y, 25);
    Body.setMass(this.body, this.body.mass * 2);
    World.add(this.world, this.body);
  }

  fly() {
    if (this.body.position.y < 100) return;

    let pushVec = Vector.create(0, -0.2);
    let posVec = Vector.create(this.body.position.x, this.body.position.y);
    Body.applyForce(this.body, posVec, pushVec);

    console.log("fly");
  }

  drawBird() {
    const { x, y } = this.body.position;
    const { width, height } = this.ctx.canvas;

    this.ctx.clearRect(0, 0, width, height);
    this.ctx.beginPath();
    this.ctx.fillStyle = this.birdColor;
    this.ctx.arc(x, y, 25, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  }
}

export default Bird;
