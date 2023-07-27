const container = document.querySelector('.container')

for (let i = 0; i < 256; i++) {
  const box = document.createElement('div')
  box.classList.add('box')
  container.appendChild(box)
}

const button = document.createElement('button')
button.innerText = 'set squares'
document.body.insertBefore(button, container)

button.addEventListener('click', (e) => {
  const squaresPerSide = parseInt(
    prompt('How many number of squares per side?', 10)
  )

  // remove existing grid
  const existingBoxes = document.querySelectorAll('.box')
  existingBoxes.forEach((box) => box.remove())

  for (let i = 0; i < squaresPerSide ** 2; i++) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.style.height = `calc(100% / ${squaresPerSide})`
    box.style.flexBasis = `calc(100% / ${squaresPerSide})`
    container.appendChild(box)

    box.addEventListener('mouseover', (e) => {
      console.dir(e.target)
    })
  }
})
