const lightBtn = document.getElementById('light')
const darkBtn = document.getElementById('dark')

function darkToggle(e) {
  console.log(e)
  lightBtn.style.display = "block"
  darkBtn.style.display = "none"
  document.body.classList.toggle('ctp-mocha')
}

function lightToggle(e) {
  console.log(e)
  darkBtn.style.display = "block"
  lightBtn.style.display = "none"
  document.body.classList.toggle('ctp-mocha')
}

lightBtn.addEventListener('click', lightToggle)
darkBtn.addEventListener('click', darkToggle)
