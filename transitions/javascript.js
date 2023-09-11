// Rotating example
function rotateBoxes() {
    const boxArr = document.querySelectorAll('.box')
    boxArr.forEach((box) => box.classList.toggle('transformed-box'))
}

const changeButton = document.querySelector('#rotate-preview-button')
changeButton.addEventListener('click', rotateBoxes)

// Timing function example

function updateTransition() {
    const timingDivs = document.querySelectorAll()
    timingDivs.forEach((div) => div.classList.toggle('timing-transformed'))
}

const intervalID = setInterval(updateTransition, 5000)