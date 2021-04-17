let canvas;
const l = 600;
let scl = 12;
let axisLength = 2 * l - Math.sqrt(2 * l ** 2);
let origin;

let a,b;

function setup() {
  canvas = createCanvas(l, l);
  canvas.mouseWheel(zoom);
  origin = new Vector()

  a = randomVector(2)
  b = randomVector(2)
}

function draw() {
  background(200)
  translate(l - axisLength, axisLength)
  strokeWeight(1)
  stroke(100)
  line(0, 0, -l + axisLength, l - axisLength) //x axis
  line(0, 0, 0, -axisLength) //y axis
  line(0, 0, axisLength, 0) //z axis
  text("1", scl, 0)

  a.show(origin, [255, 0, 0])
  b.show(origin, [0, 255, 0])

  vectorProduct(a, b)
    .show(a, [0, 0, 255])
}

let zoom = event => {
  if (event.deltaY > 0 && scl > 1) {
    scl--
  } else if (event.deltaY < 0) {
    scl++
  }
}