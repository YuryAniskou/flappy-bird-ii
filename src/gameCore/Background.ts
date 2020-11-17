import { World, Bodies } from "matter-js";
class Background {
  world: World;
  ctx: CanvasRenderingContext2D;
  groundHeight: number = 100;
  groundColor: string = "rgb(135, 100, 47)";
  skyColor: string = "rgb(81, 153, 224)";

  constructor(ctx: CanvasRenderingContext2D, world: World) {
    this.world = world;
    this.ctx = ctx;

    this.drawSky();
    this.addGround();
    this.drawGround();
  }

  private addGround() {
    const { height, width } = this.ctx.canvas;

    const ground = Bodies.rectangle(
      0,
      height - this.groundHeight / 2,
      width,
      this.groundHeight
    );
    ground.isStatic = true;

    World.add(this.world, ground);
  }

  private drawSky() {
    const { height, width } = this.ctx.canvas;

    this.ctx.fillStyle = this.skyColor;
    this.ctx.fillRect(0, 0, width, height);
  }

  private drawGround() {
    const { height, width } = this.ctx.canvas;

    this.ctx.fillStyle = this.groundColor;
    this.ctx.fillRect(0, height - this.groundHeight, width, this.groundHeight);
  }
}

export default Background;
