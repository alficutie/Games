const containerDisplay = document.querySelector('#container')
const scoreDisplay = document.querySelector('#score')
const h2ScoreText = document.querySelector('.h2Score')
const hero = document.querySelector('#hero')
scoreDisplay.textContent = 0

const cardArray = [
    {
        name: 'icecream',
        img: 'assets/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'assets/pizza.png',
    },
    {
        name: 'cheeseburger',
        img: 'assets/cheeseburger.png',
    },
    {
        name: 'milkshake',
        img: 'assets/milkshake.png',
    },
    {
        name: 'hotdog',
        img: 'assets/hotdog.png',
    },
    {
        name: 'fries',
        img: 'assets/fries.png',
    },
    {
        name: 'icecream',
        img: 'assets/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'assets/pizza.png',
    },
    {
        name: 'cheeseburger',
        img: 'assets/cheeseburger.png',
    },
    {
        name: 'milkshake',
        img: 'assets/milkshake.png',
    },
    {
        name: 'hotdog',
        img: 'assets/hotdog.png',
    },
    {
        name: 'fries',
        img: 'assets/fries.png',
    },
]

cardArray.sort(() => 0.5 - Math.random())

// Board is where the cards will be placed
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const board = document.createElement('img')
        board.setAttribute('src', 'assets/blank.png')
        board.setAttribute('data-id', i)
        board.addEventListener('click', flipBoard)
        containerDisplay.append(board)
    }
}
createBoard()

let cardsChosenNames = []
let cardsChosenIds = []
let cardsWon = []

function flipBoard() {
    const boardId = this.getAttribute('data-id')
    cardsChosenNames.push(cardArray[boardId].name)
    cardsChosenIds.push(boardId)
    this.setAttribute('src', cardArray[boardId].img)
    
    console.log('Cards chosen =',cardsChosenNames)
    console.log('Cards id',cardsChosenIds)

    if(cardsChosenNames.length === 2){
        setTimeout(checkMatch, 500)
    }
}


const allBoard = document.querySelectorAll('#container img')

function checkMatch() {
    if(cardsChosenIds[0] === cardsChosenIds[1]){
        allBoard[cardsChosenIds[0]].setAttribute('src', 'assets/blank.png')
        allBoard[cardsChosenIds[1]].setAttribute('src', 'assets/blank.png')
        alert('You cant click the same board')
        console.log(cardsChosenNames)
    }
    else if(cardsChosenNames[0] === cardsChosenNames[1]){
        cardsWon.push(cardsChosenNames)
        allBoard[cardsChosenIds[0]].setAttribute('src', 'assets/white.png')
        allBoard[cardsChosenIds[1]].setAttribute('src', 'assets/white.png')

        
    }else {
        allBoard[cardsChosenIds[0]].setAttribute('src', 'assets/blank.png')
        allBoard[cardsChosenIds[1]].setAttribute('src', 'assets/blank.png')
    }
    
    cardsChosenNames = []
    cardsChosenIds = []

    scoreDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        scoreDisplay.style.display = 'none'
        h2ScoreText.textContent = 'Congratulations you have found them all !'
        h2ScoreText.style.animation = 'stretch .5s infinite linear'
        const replayBtn = document.createElement('button')
        hero.append(replayBtn)
        replayBtn.setAttribute('class', 'replay')
        replayBtn.textContent = 'Again ?'
        replayBtn.addEventListener('click', () => {
            location.reload()
        })
    }
}