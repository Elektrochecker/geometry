document.getElementById("vectorInputButton").onclick = () => {
    let input = document.getElementById("vectorInput")
    input = eval(`[${input.value}]`)

    if (input.length != 3) {
        console.error("Invalid Vector Input")
        return false
    } else {
        v = new Vector(input[0], input[1], input[2])
        customVectors.push(v)
        return v;
    }
}