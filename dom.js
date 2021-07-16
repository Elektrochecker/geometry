document.getElementById("pointInputButton").onclick = () => {
    let input = document.getElementById("pointInput")
    input = eval(`[${input.value}]`)

    if (input.length != 3) {
        console.error("Invalid point input")
        return false
    } else {
        let p = new Point(input[0], input[1], input[2])
        customPoints.push(p)
        return p;
    }
}

document.getElementById("vectorInputButton").onclick = () => {
    let input = document.getElementById("vectorInput")
    input = eval(`[${input.value}]`)

    if (input.length != 3) {
        console.error("Invalid vector input")
        return false
    } else {
        let v = new Vector(input[0], input[1], input[2])
        customVectors.push(v)
        return v;
    }
}

document.getElementById("planeInputButton").onclick = () => {
    let input = document.getElementById("planeInput")
    input = eval(`[${input.value}]`)

    if (input.length != 4) {
        console.error("Invalid plane input")
        return false
    } else {
        let e = new Plane(new Vector(input[0], input[1], input[2]), input[3])
        customPlanes.push(e)
        return e;
    }
}