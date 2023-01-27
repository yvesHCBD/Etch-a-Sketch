const grid = document.querySelector(".grid-container");
const cellWidth = parseInt(getComputedStyle(grid).width);

const makeGridCell = (size) => {
  const div = document.createElement("div");
  div.style.width = div.style.height = `${size}px`;
  div.classList.add("grid-cell");
  return div;
};

const createGrid = (length) => {
  for (let i = 0; i < length * length; i++) {
    grid.appendChild(makeGridCell(cellWidth / length));
  }
};

createGrid(16);

grid.addEventListener("click", (e) => {
  const cell = e.target.closest("div");
  if (cell && cell.classList.contains("grid-cell") && grid.contains(cell)) {
    cell.style.background = "black";
  }
});
