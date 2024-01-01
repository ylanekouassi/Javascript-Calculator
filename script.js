let screen = document.getElementById("screen");
let calculator = document.getElementsByClassName("calculator")[0];
let buttons = calculator.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    let clickedButton = buttons[i].addEventListener("click", displayScreen);
}
function displayScreen(e) {
    if (e.target.innerText === "Clear"){
        screen.innerText = "";
    } else if (e.target.innerText === "="){
        try {
            screen.innerText = eval(screen.innerText);
        } catch {
            screen.innerText = "ERROR..."
        }
        screen.innerText = eval(screen.innerText);
    }
    
    else {
        screen.innerText += e.target.innerText;
    }
}