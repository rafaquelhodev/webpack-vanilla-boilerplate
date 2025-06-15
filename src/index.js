import './style.css'

function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello, webpack 6!'
  return element
}

document.getElementById('app').appendChild(component())

if (module.hot) {
  module.hot.accept('./index.js', function () {
    console.log('The module was updated!')
  })
}
