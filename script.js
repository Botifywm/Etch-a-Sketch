const btn = document.querySelector(".length");
const container = document.querySelector(".container");
const select_col = document.querySelector("#gridCol");

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
    coloring()
}

function coloring() {
    let color = document.querySelector("#gridCol").value;
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => grid.addEventListener("mouseover", () => grid.style.backgroundColor = color));
}

createGrid()

btn.addEventListener("click", usrInput)

select_col.addEventListener("change", coloring)

// const grids = document.querySelectorAll(".grid");
// grids.forEach((grid) => grid.addEventListener("mouseover", () => coloring(grid)));
