const container = document.querySelector(".container")
let lastRow = 16

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPixel(rows) {    
    let cellSize = 550/rows
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++){
            let pixel = document.createElement("div");
            pixel.setAttribute("class", "pixel")
            pixel.setAttribute("style", `width: ${cellSize}px; height: ${cellSize}px`)
            container.appendChild(pixel)
        }   
    }
    return cellSize;
}

function delBoard() {
    let pixels = document.querySelectorAll(".pixel")
    pixels.forEach(pix => {pix.remove()})    
}

function pencil(size) {
    let cell = document.querySelectorAll(".pixel")
    cell.forEach(cel => {
        cel.addEventListener("mouseover", () => {
            let colors = ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#a0c4ff","#bdb2ff","#ffc6ff"]
            let num = randomNumber(0,5)
            let color = colors[num]
            cel.setAttribute("style", `background-color: ${color}; width: ${size}px; height: ${size}px`);

})})}

document.querySelector("#size").addEventListener("click", () => {
    let row = prompt("size (16 - 100)", "16");
    if ((row < 16) || (row > 100)) return alert("invalid size");

    lastRow = row
    delBoard()
    size = createPixel(row)
    pencil(size)
})

document.querySelector("#clear").addEventListener("click", () => {
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pix => {
        pix.setAttribute("style", `background-color: white; width: ${size}px; height: ${size}px`);})
})
