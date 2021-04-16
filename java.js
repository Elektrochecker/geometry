let l = 400;
let axisLength = 2 * l - Math.sqrt(2 * l ** 2);

function setup() {
  createCanvas(l, l);

}

function draw() {
  background(200)
  translate(l - axisLength, axisLength)
  stroke(0)
  line(0,0, -l, l) //x axis
  line(0,0, 0, -l) //y axis
  line(0,0, l, 0) //z axis
}