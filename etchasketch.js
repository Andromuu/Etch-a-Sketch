const container = document.getElementById("container");

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

createGrid(16);