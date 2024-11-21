import { init, next } from "./node_modules/n-body_simulation/N-body.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

function setup() {
  init(
    [
      { x: -10, y: 0 },
      { x: 10, y: 0 },
    ],
    1
  );
}

ctx.globalCompositeOperation = "screen";

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let particle of next()) {
    drawParticle(particle);
  }
  requestAnimationFrame(draw);
}

function drawParticle(partical) {
  ctx.fillStyle = "#000";
  ctx.strokeStyle = "#000";
  ctx.fillRect(
    Number(partical.x) + canvas.width / 2 - 2,
    Number(partical.y) + canvas.height / 2 - 2,
    4,
    4
  );
}

setup();
draw();
