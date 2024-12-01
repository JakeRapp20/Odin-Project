


function add7 (num) {
    console.log(num + 7);
}

add7(1)

function multiply(num1, num2) {
    console.log(num1 * num2);
}
multiply(2, 2)

function capitalize(string) {
    lower = string.toLowerCase();
    let capitalized = lower.charAt(0).toUpperCase() + lower.slice(1);
    console.log(capitalized);
}

capitalize("jaKE")

function lastLetter(string) {
    console.log(string.charAt(string.length - 1));
}

lastLetter("test")