let list = document.querySelector("#list")
let input = document.querySelector("#item")
let button = document.querySelector("#button")

function deleteItem() {
    list.removeChild(listItem);
}


function addItem() {
    let listItem = document.createElement("li");
    let span = document.createElement("span");
    let inputValue = input.value;
    console.log(inputValue)
    span.textContent = inputValue;
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "deleteButton")
    deleteButton.textContent= "Delete"
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    deleteButton.addEventListener("click", () => {
        list.removeChild(listItem)
    })
    input.focus();
    input.value = ""
}

button.addEventListener("click", deleteItem)

button.addEventListener("click", addItem)