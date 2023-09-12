let arr = ['🪨', '📃', '✂️', '🪨', '📃', '✂️', '📃', '✂️', '🪨']
let outletUser = document.querySelector(".displayPlayer")
let outletComp = document.querySelector(".displayComputer")
const section = document.querySelector("section")
let player
let computer
let rock = document.querySelector(".rock")
let result = document.querySelector(".result")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")
let playerResult = document.querySelector(".playerResult")
let computerResult = document.querySelector(".computerResult")
let rand = 0
let win = new Audio('win.wav')
let lose = new Audio('lose.wav')
let playerScore = 0
let computerScore = 0

function reset() {
    location.reload()
}
function createResetBtn() {

    scissors.removeEventListener("click", showScissors)
    rock.removeEventListener("click", rockShow)
    paper.removeEventListener("click", showPaper)
    btn = document.createElement("button")
    btn.className = "resetting"
    btn.textContent = "reset"
    section.appendChild(btn)
    btn.addEventListener("click", reset)
}
function winning() {
    playerScore++
    playerResult.textContent = playerScore
    if (playerScore === 5) {
        result.innerHTML = "You WIN 🥳"
        createResetBtn()

    } win.play()
}

function losing() {
    computerScore++
    computerResult.textContent = computerScore
    if (computerScore === 5) {
        result.innerHTML = "computer win 🖥️"

        createResetBtn()
    }
    lose.play()
}

function rockShow() {
    rand = Math.floor(Math.random() * 8)
    outletComp.textContent = arr[rand]
    outletUser.textContent = "🪨"
    switch (outletComp.textContent) {
        case '🪨':
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
            break;
    }
}

scissors.addEventListener("click", showScissors)
rock.addEventListener("click", rockShow)
paper.addEventListener("click", showPaper)

