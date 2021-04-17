function Vector(a=0,b=0,c=0) {
    this.x = a;
    this.y = b;
    this.z = c;

    this.abs = () => sqrt(this.x**2 + this.y**2 + this.z**2);

    this.show = (start= new Vector(), color= [255,0,0])  => {
        let start2d = convert2d(start);
        let vector2d = convert2d(this);

        strokeWeight(2)
        stroke(color)
        line(start2d.x, start2d.y, vector2d.x+start2d.x, vector2d.y+start2d.y)
        return this;
    }
}

function Plane(a=0,b=0,c=0,d=0) {
    this.x = a;
    this.y = b;
    this.z = c;
    this.d = d;

    this.show = () => {
        let x = this.d/this.x;
        let y = this.d/this.y;
        let z = this.d/this.z;
    }
}


let randomVector = (a=1) => {
    let x = (Math.random()-0.5)*a*2
    let y = (Math.random()-0.5)*a*2
    let z = (Math.random()-0.5)*a*2
    return new Vector(x,y,z);
}

let vectorProduct = (a,b) => {
    let x = a.y*b.z - a.z*b.y;
    let y = a.z*b.x - a.x*b.z;
    let z = a.x*b.y - a.y*b.x;
    return new Vector(x,y,z);
}

let scalarProduct = (a,b) => a.x*b.x + a.y*b.y + a.z*b.z;

let convert2d = vector => {
    let x = vector.x*sqrt(2)/2;
        x = -sqrt(x**2/2)
        x += vector.y;
        x *= scl
    let y = vector.x*sqrt(2)/2;
        y = sqrt(y**2/2)
        y -= vector.z;
        y *= scl
    return {
        x:x,
        y:y
    }
}