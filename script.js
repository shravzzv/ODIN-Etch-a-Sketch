const container = document.querySelector('.container')

for (let i = 0; i < 256; i++) {
  const box = document.createElement('div')
  box.classList.add('box')
  container.appendChild(box)
}

const button = document.createElement('button')
button.innerText = 'create new grid'
button.classList.add('button')
document.body.insertBefore(button, container)

button.addEventListener('click', (e) => {
  let squaresPerSide = parseInt(
    prompt('How many number of squares do you want per side?', 10)
  )
  while (squaresPerSide > 100 || squaresPerSide < 0) {
    squaresPerSide = parseInt(
      prompt(
        'The number of squares per side can be between 0 and 100 only!',
        100
      )
    )
  }

  // remove existing grid
  const existingBoxes = document.querySelectorAll('.box')
  existingBoxes.forEach((box) => box.remove())

  for (let i = 0; i < squaresPerSide ** 2; i++) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.style.height = `calc(100% / ${squaresPerSide})`
    box.style.flexBasis = `calc(100% / ${squaresPerSide})`
    container.appendChild(box)

    box.addEventListener('mouseenter', (e) => {
      box.style.backgroundColor = getRandomRGB()
    })
    box.addEventListener('mouseleave', (e) => {
      box.style.backgroundColor = 'transparent'
    })
  }
})

const getRandomRGB = () =>
  `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(
    0,
    255
  )}, ${getRandomIntInclusive(0, 255)})`

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
