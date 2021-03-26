//DIRECTION
let inputDirection = {x: 1, y: 0}

const buttonUp = document.querySelector('#up')
const buttonDown = document.querySelector('#down')
const buttonLeft = document.querySelector('#left')
const buttonRight = document.querySelector('#right')



buttonUp.addEventListener('click', function(){inputDirection = { x: 0, y: -1}});
buttonDown.addEventListener('click', function(){inputDirection = { x: 0, y: 1}});
buttonLeft.addEventListener('click', function(){inputDirection = { x: -1, y: 0}});
buttonRight.addEventListener('click', function(){inputDirection = { x: 1, y: 0}});


window.addEventListener('keydown', e =>{
    switch (e.key) {
        case "ArrowUp":
            inputDirection = { x: 0, y: -1}
            break
        case "ArrowDown":
            inputDirection = { x: 0, y: 1}
            break
        case "ArrowLeft":
            inputDirection = { x: -1, y: 0}
            break
        case "ArrowRight":
            inputDirection = { x: 1, y: 0}
            break
    }
})

export function getInputDirection() {
    return inputDirection
}

//MENU
let start = false
let snakeSpeed = 4
let progressive = false

const menu = document.getElementById("menu")

const buttonEasy = document.querySelector('#buttonEasy')
const buttonMedium = document.querySelector('#buttonMedium')
const buttonGod = document.querySelector('#buttonGod')
const buttonProgressive = document.querySelector('#buttonProgressive')

buttonEasy.addEventListener('click', function(){startGame("easy")})
buttonMedium.addEventListener('click', function(){startGame("medium")})
buttonGod.addEventListener('click', function(){startGame("god")})
buttonProgressive.addEventListener('click', function(){startGame("progressive")})




function startGame(mode){
    switch (mode){
        case "easy":
            snakeSpeed=4
            break
        case "medium":
            snakeSpeed=6
            break
        case "god":
            snakeSpeed=10
            break
        case "progressive":
            progressive=true
            snakeSpeed=4
            break
    }
    start = true
    menu.style.display = "none"
}

export function getMenu(){
    return menu
}
export function getStart(){
    return start
}
export function changeStart(){
    start= !start
}
export function getSnakeSpeed(){
    return snakeSpeed
}
export function moreSnakeSpeed(){
    snakeSpeed++
}
export function getProgressive(){
    return progressive
}
export function setupProgressive(){
    progressive=false
}