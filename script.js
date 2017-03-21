var num = parseInt(window.localStorage.getItem('visits'))

if (num === null) {
  num = 0
}

num++

window.localStorage.setItem('visits', num)

document.getElementById('number').innerHTML = num

var changeButton = document.getElementById('switch')
changeButton.addEventListener('click', changeFunction)

var changeVariable = parseInt(window.localStorage.getItem('choice'))

if (changeVariable === null) {
  changeVariable = -1
}
if (changeVariable === 1) {
  document.body.setAttribute('class', 'dark')
}
if (changeVariable === -1) {
  document.body.setAttribute('class', 'light')
}
function changeFunction () {
  if (changeVariable === -1) {
    document.body.setAttribute('class', 'dark')
    window.alert('Black Theme.')
    changeVariable = changeVariable * -1
  } else if (changeVariable === 1) {
    document.body.setAttribute('class', 'light')
    window.alert('Light Theme.')
    changeVariable = changeVariable * -1
  }
  window.localStorage.setItem('choice', changeVariable)
}