



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

  box.style.width = box.style.height = '30px'
  box.style.backgroundColor = '#000'
  box.style.top = '50px';
  box.style.left = '70px';
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement('afterbegin', box)

}