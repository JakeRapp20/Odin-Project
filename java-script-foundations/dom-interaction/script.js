const container = document.querySelector("#container");

const content = document.createElement("div");
content.textContent = "This is the glorious text-content!";
content.classList.add("content");

const p = document.createElement("p");
p.style.color = "red"
p.textContent = "Hey I'm Red!"

const div = document.createElement("div");
div.innerHTML = "<h1>I'm a div</h2><p>ME TOO!</p>"
div.style.borderColor = "black"
div.style.backgroundColor = "pink"
div.style.borderStyle = "solid"


container.appendChild(content);
container.appendChild(p);
container.appendChild(div)

const btn = document.querySelector("#btn-1");
btn.addEventListener("click", function (e) {
    console.log(e.target.style.background = "blue");
})

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})
// btn.onclick = () => alert("Hello World")
