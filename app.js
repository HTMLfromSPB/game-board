const board = document.querySelector('#board')
const SQUARES_NUMBER = 500;
const colors = ['#61032', '#36090d', '#736f02', '#098703', '#067275', '#040a4d', '#35014a']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}
    function setColor(element) {
        let color = getRandomColor()
        element.style.backgroundColor = color
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    function removeColor(element) {
        element.style.background = '#1d1d1d'
        element.style.boxShadow = '0 0 2px #000'
    }

    function getRandomColor() {
        let index = Math.floor(Math.random() * colors.length)
        return colors[index]

    }