let arr = ['🪨', '📃', '✂️', '🪨', '📃', '✂️', '📃', '✂️', '🪨']
let outletUser = document.querySelector(".displayPlayer")
let outletComp = document.querySelector(".displayComputer")
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")
let result = document.querySelector(".result")
let rand = 0
let win = new Audio('win.wav')
let lose = new Audio('lose.wav')



function winning() {
    result.textContent = "YOU WIN 🥳"
    win.play()
}

function losing() {
    result.textContent = "YOU LOST 😞"
    lose.play()
}

function rockShow() {
    rand = Math.floor(Math.random() * 8)
    outletComp.textContent = arr[rand]
    outletUser.textContent = "🪨"
    switch (outletComp.textContent) {
        case '🪨':
            result.textContent = "ITS a DRAW 🪙"
            break;
        case '📃':
            losing()
            break;
        case '✂️':
            winning()
            break;
    }
}

function showPaper() {
    rand = Math.floor(Math.random() * 8) + 1
    outletComp.textContent = arr[rand]
    outletUser.textContent = "📃"
    switch (outletComp.textContent) {
        case '🪨':
            winning()
            break;
        case '📃':
            result.textContent = "ITS a DRAW 🪙"
            break;
        case '✂️':
            losing()
            break;
    }
}

function showScissors() {
    rand = Math.floor(Math.random() * 8) + 1
    outletComp.textContent = arr[rand]
    outletUser.textContent = "✂️"
    switch (outletComp.textContent) {
        case '🪨':
            losing()
            break;
        case '📃':
            winning()
            break;
        case '✂️':
            result.textContent = "ITS a DRAW 🪙"
            break;
    }
}

scissors.addEventListener("click", showScissors)
rock.addEventListener("click", rockShow)
paper.addEventListener("click", showPaper)

