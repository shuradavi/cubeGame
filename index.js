

let $game = document.querySelector('#game')
let $start = document.querySelector('#start')

let score = 0;

$game.addEventListener('click', handleBoxClick)
$start.addEventListener('click', function () {

  $start.classList.add('hide')
  $game.style.backgroundColor = '#fff'

  renderBox()
})

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
  box.style.width = box.style.height = boxSize + 'px'
  box.style.backgroundColor = '#000'
  box.style.top = getRandom(0, (gameSize.height - boxSize))
  box.style.left = getRandom(0, (gameSize.width - boxSize))
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement('afterbegin', box)

}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}