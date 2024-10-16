const containerGrids = document.querySelector("#container");

const gridSize = 16 * 16;

function createSquare(){
    const square = document.createElement("div");
    square.classList.add("square");

    containerGrids.appendChild(square);
}

for(let i = 0; i < gridSize; i++){
    createSquare();
}