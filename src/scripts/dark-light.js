const lightBtn = document.getElementById('light')
const darkBtn = document.getElementById('dark')

function darkToggle() {
  lightBtn.style.display = "block"
  darkBtn.style.display = "none"
  document.body.className = "mocha"
}

function lightToggle() {
  console.log()
  darkBtn.style.display = "block"
  lightBtn.style.display = "none"
  document.body.className = "latte"
}

lightBtn.addEventListener('click', lightToggle)
darkBtn.addEventListener('click', darkToggle)
