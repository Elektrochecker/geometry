class Vector {
    constructor(a = 0, b = 0, c = 0) {
        this.x = a;
        this.y = b;
        this.z = c;
    }

    abs = () => Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);

    show = (start = new Vector(), color = [255, 0, 0]) => {
        let start2d = convert2d(start);
        let vector2d = convert2d(this);

        strokeWeight(2);
        stroke(color);
        line(start2d.x, start2d.y, vector2d.x + start2d.x, vector2d.y + start2d.y);
        return this;
    };
}

class Plane {
    constructor(n = new Vector(), d = 0, color = [0, 0, 255]) {
        this.x = n.x;
        this.y = n.y;
        this.z = n.z;
        this.d = d;
        this.color = color;
    }

    rootPoint = () => {
        let Sx = new Vector(this.d / this.x, 0, 0);
        let Sy = new Vector(0, this.d / this.y, 0);
        let Sz = new Vector(0, 0, this.d / this.z);

        return {
            Sx: Sx,
            Sy: Sy,
            Sz: Sz
        };
    };

    show = () => {
        let Sx = convert2d(new Vector(this.d / this.x, 0, 0));
        let Sy = convert2d(new Vector(0, this.d / this.y, 0));
        let Sz = convert2d(new Vector(0, 0, this.d / this.z));

        strokeWeight(2);
        stroke(this.color);
        line(Sx.x, Sx.y, Sy.x, Sy.y);
        line(Sy.x, Sy.y, Sz.x, Sz.y);
        line(Sz.x, Sz.y, Sx.x, Sx.y);
        return this;
    };
}

let randomVector = (a = 1, whole = true) => {
    let x = (Math.random() - 0.5) * a * 2
    let y = (Math.random() - 0.5) * a * 2
    let z = (Math.random() - 0.5) * a * 2
    if (whole) {
        x = Math.floor(x)
        y = Math.floor(y)
        z = Math.floor(z)
    }
    return new Vector(x, y, z);
}

let vectorProduct = (a, b) => {
    let x = a.y * b.z - a.z * b.y;
    let y = a.z * b.x - a.x * b.z;
    let z = a.x * b.y - a.y * b.x;
    return new Vector(x, y, z);
}

let scalarProduct = (a, b) => a.x * b.x + a.y * b.y + a.z * b.z;

let convert2d = vector => {
    let positiveX = vector.x >= 0 ? 1 : -1
    let x = vector.x * Math.sqrt(2) / 2;
    x = -Math.sqrt(x ** 2 / 2) * positiveX
    x += vector.y;
    x *= scl
    let y = vector.x * Math.sqrt(2) / 2;
    y = Math.sqrt(y ** 2 / 2) * positiveX
    y -= vector.z;
    y *= scl
    return {
        x: x,
        y: y
    }
}