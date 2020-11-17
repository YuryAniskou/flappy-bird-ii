class Background {
  ctx: CanvasRenderingContext2D;
  groundHeight: number = 100;
  groundColor: string = "rgb(135, 100, 47)";
  skyColor: string = "rgb(81, 153, 224)";

  private init() {
    this.drawSky();
    this.drawGround();
  }

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;

    this.init();
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
