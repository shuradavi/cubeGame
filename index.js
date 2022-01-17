let $start = document.querySelector('#start')
let $game = document.querySelector('#game')

let score = 0;

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)


function startGame() {
  $start.classList.add('hide')
  $game.style.backgroundColor = '#fff'

  renderBox()
}

function handleBoxClick(event) {
  if (event.target.dataset.box) {
    score++
    renderBox()
  }
}

function renderBox() {
  $game.innerHTML = ''
  let box = document.createElement('div')
  let boxSize = getRandom(30, 100)
  let gameSize = $game.getBoundingClientRect()



  box.style.height = box.style.width = boxSize + 'px'
  box.style.position = 'absolute'
  box.style.backgroundColor = '#000'
  box.style.top = getRandom(0, (gameSize.height - boxSize)) + 'px'
  box.style.left = getRandom(0, (gameSize.width - boxSize)) + 'px'
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement('afterbegin', box)

}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}