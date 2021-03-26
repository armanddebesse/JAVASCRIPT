import {update as updateSnake, draw as drawSnake} from './snake.js'
import {getSnakeSpeed, getStart} from './input.js'
let lastRenderTime = 0
const gameBoard = document.getElementById("game-board")


function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    
    if (secondsSinceLastRender < 1/getSnakeSpeed())
    {
        return
    }

    lastRenderTime = currentTime

    if (getStart())
    {
        update()
        draw()
    }
}

window.requestAnimationFrame(main)

function update()
{
    updateSnake()
}

function draw()
{
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
}