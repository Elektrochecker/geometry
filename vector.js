function Vector(a,b,c) {
    this.x = a;
    this.y = b;
    this.z = c;

    this.abs = () => sqrt(this.x**2 + this.y**2 + this.z**2);
}

let vectorProduct = (a,b) => {
    let x = a.y*b.z - a.z*b.y;
    let y = a.z*b.x - a.x*b.z;
    let z = a.x*b.y - a.y*b.x;
    return new Vector(x,y,z);
}

let scalarProduct = (a,b) => a.x*b.x + a.y*b.y + a.z*b.z;