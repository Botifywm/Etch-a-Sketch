const btn = document.querySelector("button");
const container = document.querySelector(".container");

function createGrid(n=16) {
    let nGrid = n * n;
    for(i=0; i<nGrid; i++){
        const grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        grid.style.height = `calc(100%/${n})`;
        grid.style.flexBasis = `calc(100%/${n})`;
        container.appendChild(grid);
    }
}

function usrInput(){
    // remove all the grids in place of the new number of grids
    document.querySelectorAll(".grid").forEach((elem) => elem.remove());

    let userInput = document.querySelector("#gridNum");
    container.removeChild
    console.log(userInput.value);
    let n = userInput.value
    let nGrid = n*n
    console.log(nGrid);
    userInput.value = "";
    
    createGrid(n)
    }

createGrid()
btn.addEventListener("click", usrInput)



// let n = userInput.value;
// let nGrid = n * n;
