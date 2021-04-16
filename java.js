const l = 400;
const scl = 8;
let axisLength = 2 * l - Math.sqrt(2 * l ** 2);
let origin;

function setup() {
  createCanvas(l, l);
  origin = new Vector()
}

function draw() {
  background(200)
  translate(l - axisLength, axisLength)
  stroke(0)
  line(0, 0, -l + axisLength, l - axisLength) //x axis
  line(0, 0, 0, -axisLength) //y axis
  line(0, 0, axisLength, 0) //z axis

  let a = new Vector(2, 0, 0)
  let b = new Vector(0, 3, 0)

  a.show(origin, [255,0,0])
  b.show(origin, [0,255,0])

  vectorProduct(a, b)
    .show(origin, [0, 0, 255])
}