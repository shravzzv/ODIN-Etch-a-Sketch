const container = document.querySelector('.container')

for (let i = 0; i < 256; i++) {
  const box = document.createElement('div')
  box.classList.add('box')
  container.appendChild(box)
}
