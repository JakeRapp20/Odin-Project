

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(size) {
    mainGrid = document.querySelector("#main-grid");
    removeAllChildNodes(mainGrid)
    let gridBoxes = size * size;
    for (let i = 0; i < gridBoxes; i++) {
        mainGrid.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
        mainGrid.style["grid-template-rows"] = `repeat(${size}, 1fr)`;
        div = document.createElement('div');
        div.classList.add("grid-items");        
        mainGrid.appendChild(div);

        let boxes = document.querySelectorAll(".grid-items")

        boxes.forEach((box) => {
        box.addEventListener("mouseover", colorGrid)
    });
        }

}

function colorGrid(e) {
    e.target.classList.add("paint-color")
}


resizeButton = document.querySelector(".resize-button")
inputForm = document.querySelector(".input-form")

resizeButton.addEventListener("click", () => {
    let input = parseInt(inputForm.value);
    createGrid(input)
})





