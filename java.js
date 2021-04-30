let canvas;
let l = 400;
let scl = 100;
let axisLength;
let origin;

let customVectors = [];

function setup() {
  if (windowWidth < windowHeight) {
    l = windowWidth - 40;
  } else {
    l = windowHeight - 40;
  }
  axisLength = 2 * l - Math.sqrt(2 * l ** 2);
  canvas = createCanvas(l, l);
  canvas.parent("coordinateWindow")
  canvas.mouseWheel(zoom);
  origin = new Vector()
}

function draw() {
  background(200)
  translate(l - axisLength, axisLength)
  strokeWeight(1)
  stroke(0)
  line(0, 0, -l + axisLength, l - axisLength) //x axis
  line(0, 0, 0, -axisLength) //y axis
  line(0, 0, axisLength, 0) //z axis
  stroke(160)
  line(0, 0, l + axisLength, -l - axisLength) //x axis
  line(0, 0, 0, axisLength) //y axis
  line(0, 0, -axisLength, 0) //z axis
  drawScale()
  render()
}

let zoom = event => {
  if (event.deltaY > 0 && scl > scl / 100 + 3) {
    scl -= scl / 100 + 3
  } else if (event.deltaY < 0) {
    scl += scl / 100 + 3
  }
}

let drawScale = () => {
  let inc = 1;
  stroke(0)

  if (scl < 40) {
    inc = 10
  }
  if (scl < 6) {
    inc = 100
  }

  for (let i = 0; i < l / scl; i += inc) {
    if (i != 0) {
      text(i, i * scl, 20)
      text(i, -20, -i * scl)
      let xText = convert2d(new Vector(i, 0, 0))
      text(i, xText.x + 10, xText.y + 10)
    }
  }
}