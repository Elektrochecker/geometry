let canvas;
let l = 400;
let scl = 20;
let axisLength;
let origin;

let n, e;

function setup() {
  if (windowWidth < windowHeight) {
    l = windowWidth - 20;
  } else {
    l = windowHeight - 20;
  }
  axisLength = 2 * l - Math.sqrt(2 * l ** 2);
  canvas = createCanvas(l, l);
  canvas.mouseWheel(zoom);
  origin = new Vector()

  n = randomVector(4)
  e = new Plane(n, 8)
}

function draw() {
  background(200)
  translate(l - axisLength, axisLength)
  strokeWeight(1)
  stroke(0)
  line(0, 0, -l + axisLength, l - axisLength)     //x axis
  line(0, 0, 0, -axisLength)                      //y axis
  line(0, 0, axisLength, 0)                       //z axis
  stroke(180)
  line(0, 0, l + axisLength, -l - axisLength)     //x axis
  line(0, 0, 0, axisLength)                       //y axis
  line(0, 0, -axisLength, 0)                      //z axis

  text("1", scl, 0)

  e.show()
  n.show(e.rootPoint().Sx)
}

let zoom = event => {
  if (event.deltaY > 0 && scl > scl/100+3) {
    scl -= scl/100+3
  } else if (event.deltaY < 0) {
    scl += scl/100+3
  }
}