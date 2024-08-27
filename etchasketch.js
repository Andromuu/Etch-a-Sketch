const container = document.getElementById("container");
const buttonGrid = document.getElementById("customGrid");
const buttonReset = document.getElementById("reset");

function createGrid (gridSize) {
    for (let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        
        for (let x = 0; x < gridSize; x++){
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
            column.addEventListener("mouseover", () => {column.style.backgroundColor = "black"});
        }
    }
}

function resetGrid(){
    const columns = document.getElementsByClassName("column");
    for (let i = 0; i < columns.length; i++){
        columns[i].style.backgroundColor = "white";
    }
}

function customGrid() {
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    let size = prompt("Enter a number beetween 1 and 100");
    return createGrid(size);
}

createGrid(16);

buttonGrid.addEventListener("click", ()=> {customGrid()});
buttonReset.addEventListener("click", ()=> {resetGrid()});