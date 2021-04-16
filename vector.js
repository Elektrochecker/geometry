function Vector(a=0,b=0,c=0) {
    this.x = a;
    this.y = b;
    this.z = c;

    this.abs = () => sqrt(this.x**2 + this.y**2 + this.z**2);

    this.show = (start= new Vector(), color= [255,0,0])  => {
        let startX = -start.x*sqrt(2)/2 + start.y;
            startX *= scl
        let startY = start.x*sqrt(2)/2 - start.z;
            startY *= scl

        let x = -this.x*sqrt(2)/2 + this.y;
            x *= scl
        let y = this.x*sqrt(2)/2 - this.z;
            y *= scl
        stroke(color)
        line(startX,startY, x+startX,y+startY)
        return this;
    }
}

let vectorProduct = (a,b) => {
    let x = a.y*b.z - a.z*b.y;
    let y = a.z*b.x - a.x*b.z;
    let z = a.x*b.y - a.y*b.x;
    return new Vector(x,y,z);
}

let scalarProduct = (a,b) => a.x*b.x + a.y*b.y + a.z*b.z;