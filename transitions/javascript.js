// Rotating boxes
function rotateBoxes() {
    const boxArr = document.querySelectorAll('.box')
    boxArr.forEach((box) => box.classList.toggle('transformed-box'))
}

const changeButton = document.querySelector('#rotate-preview-button')
changeButton.addEventListener('click', rotateBoxes)
