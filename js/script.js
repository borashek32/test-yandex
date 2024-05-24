const wrapper = document.querySelector('.cardsWrapper');
const rightArrow = document.getElementById('rightArrow');
const leftArrow = document.getElementById('leftArrow');
const participantsNumbers = document.querySelector('.pages__numbers')

let offset = 0;

const moveLeft = () => {
  wrapper.style.left = 0;
  rightArrow.removeAttribute('disabled', '');
  leftArrow.setAttribute('disabled', '');
  participantsNumbers.innerHTML = '3/6';
}

const moveRight = () => {
  wrapper.style.left = -1257 + 'px';
  rightArrow.setAttribute('disabled', '');
  leftArrow.removeAttribute('disabled', '');
  participantsNumbers.innerHTML = '6/6';
}

rightArrow.addEventListener('click', () => {
  moveRight();
});

leftArrow.addEventListener('click', () => {
  moveLeft()
});

setInterval(() => {
  moveRight();
  setTimeout(() => {
    moveLeft();
  }, 4000)
}, 8000);