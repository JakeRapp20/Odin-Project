let allButtons = document.querySelectorAll("#button")
let display = document.querySelector("#display")

let input = []

allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        input.push(e.target.innerText)
        display.textContent = input.join(' ')
    })
})

const clearButton = document.querySelector("#clear")

clearButton.addEventListener("click", () => {
    input = []
    display.textContent = input
})

function validateInput(inputArray) {

    const operators = ["+", "-", "*", "/"];
    function isOperator(value) {
        return operators.includes(value)
    }

    let invalidCounter = 0
    for (let i = 0; i < inputArray.length; i++) {
        if (isOperator(inputArray[i]) && isOperator(inputArray[i + 1])) {
            invalidCounter = invalidCounter + 1
        }
    }
    if (invalidCounter > 0) {
        input = []
        return alert("Invalid Input")
    } else return inputArray;
}


function calculate(inputArray) {
    return eval(validateInput(inputArray).join(""))
}

document.querySelector("#evaluate").addEventListener("click", () => {
    display.textContent = calculate(input)
})
