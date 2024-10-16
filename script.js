const containerGrids = document.querySelector("#container");
const numberGridButton = document.querySelector("#numberGridFunc");
const numberGridInput = document.querySelector("#numberGridInput");


let gridSize = 16;

numberGridButton.addEventListener("click", () => {
    gridSize = numberGridInput.value;

    console.log("test");

    createSquare();
})

function createSquare(){
    containerGrids.innerHTML = "";

    for (let i = 0; i < gridSize * gridSize; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = 800 / gridSize + "px";
        square.style.height = 800 / gridSize + "px";
    
        containerGrids.appendChild(square);
    }


}

createSquare();