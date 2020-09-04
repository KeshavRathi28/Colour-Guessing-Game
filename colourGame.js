let numSquares = 6;
let colours;
let pickedColour;

let squares = document.querySelectorAll(".square");
let colourDisplay = document.querySelector("#colourDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset(numSquares);
};

function setupModeButtons() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons.forEach(button => {
                button.classList.remove("selected");
            });
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset(numSquares);
        });
    }
}

function setupSquares() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            let clickedColour = this.style.backgroundColor;
            if(clickedColour === pickedColour) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColours(clickedColour);
                h1.style.backgroundColor = clickedColour;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}

function reset(n) {
    colours = generateRandomColours(n);
    pickedColour = pickColour(colours);
    colourDisplay.textContent = pickedColour;
    resetButton.textContent = "New Colours";
    messageDisplay.textContent = "";
    for(let i = 0; i < squares.length; i++) {
        if(colours[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset(numSquares);
});

function changeColours(colour) {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour(arr) {
    return(colours[Math.floor(Math.random() * arr.length)]);
}

function generateRandomColours(num) {
    let arr = [];
    for(let i = 0; i < num; i++) {
        arr.push(randomColour());
    }
    return(arr);
};

function randomColour() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return("rgb(" + r + ", " + g + ", " + b + ")");
}