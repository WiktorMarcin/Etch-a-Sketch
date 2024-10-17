const containerGrids = document.querySelector("#container");
const numberGridButton = document.querySelector("#numberGridFunc");
const numberGridInput = document.querySelector("#numberGridInput");


let gridSize = 16;

function mathRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function colorRandom(){
    return `RGBA( ${mathRandom(0,255)}, ${mathRandom(0,255)}, ${mathRandom(0,255)}, 0)`;
}

console.log(colorRandom());

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
        square.style.background = colorRandom();
    
        containerGrids.appendChild(square);
    }

    alphaSquare();

}

createSquare();


function alphaSquare(){
    const square = document.querySelectorAll(".square");

    square.forEach(square => {
        square.addEventListener("mouseover", () => {
            const color = getComputedStyle(square).getPropertyValue("background-color")
    
            const parts = color.match(/[\d.]+/g);
    
            let alpha = parseFloat(parts[3]);
    
            alpha += 0.1;
    
            parts[3] = alpha;
    
            square.style.backgroundColor = `rgba(${parts.join(',')})`;
        })
    })    
}

