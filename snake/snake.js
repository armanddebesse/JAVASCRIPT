import { getInputDirection, changeStart, getMenu, getProgressive, moreSnakeSpeed, setupProgressive} from "./input.js";

//SNAKE
let score = 0

let snakeBody = [
    { x: 10, y: 11}
]

function addSnakeElement(){
    let newX = snakeBody[snakeBody.length - 1].x
    let newY = snakeBody[snakeBody.length - 1].y
    snakeBody.push({ x: newX, y: newY})
}


//APPLE
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min
}

let apple = { x:10, y: 10}


function createApple()
{
    apple = { x: entierAleatoire(1,21), y: entierAleatoire(1,21)}
}

//musique

var soundApple = new Audio("musiquePomme.wav")
var soundLoose = new Audio("musiqueLoose.wav")


//update and draw and reset

function reset(){
    soundLoose.play()
    window.alert("perdu  score:"+score)
    snakeBody = [{ x: 10, y: 10}]
    score=0
    getMenu().style.display="block"
    changeStart()
    setupProgressive()
}

export function update()
{
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--)
    {
        snakeBody[i + 1] = { ...snakeBody[i]}
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y


    if ((snakeBody[0].x >21) || (snakeBody[0].y >21) || (snakeBody[0].x <1) || (snakeBody[0].y <1))
    {
        reset()
    }
    else
    {
        for(let i=1; i<snakeBody.length; i++)
        {
            if ((snakeBody[0].x == snakeBody[i].x) && (snakeBody[0].y == snakeBody[i].y))
            {
                reset()
            }
        }
    }

    if ((apple.x == snakeBody[0].x) && (apple.y == snakeBody[0].y))
    {
        soundApple.play()
        createApple()
        addSnakeElement()
        score++
        soundApple.currentTime=0
        if (getProgressive())
        {
            moreSnakeSpeed()
        }
    }
}

export function draw(gameBoard)
{
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add("snake")
        gameBoard.appendChild(snakeElement)
    })

    const appleElement = document.createElement("div")
    appleElement.style.gridRowStart = apple.y
    appleElement.style.gridColumnStart = apple.x
    appleElement.classList.add("apple")
    gameBoard.appendChild(appleElement)
}

