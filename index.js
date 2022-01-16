let $game = document.querySelector('#game')
let $start = document.querySelector('#start')
let score = 0;

$game.addEventListener('click', handleBoxClick)
$start.addEventListener('click', function () {

  $start.classList.add('hide')
  $game.style.backgroundColor = '#fff'

  renderBox()
})

function renderBox() {
  $game.innerHTML = ''
//   let randomBox = Math.floor(Math.random())
let box = document.createElement('div')
box.style.width = box.style.height = '50px'
box.style.backgroundColor = 'black'
box.style.top = '30px'
box.style.left = '70px'
box.style.cursor = 'pointer'
box.setAttribute('data-box', 'true')

$game.insertAdjacentElement('afterbegin', box)
}


function handleBoxClick(event) {
  if (event.target.dataset.box)
  score++
  renderBox()
}

