import './styles.scss'
import logoImg from './content/logo_1.png'

const img = document.createElement('img')
img.src = logoImg
img.classList.add('image')
document.getElementById('imgContainer').appendChild(img)

const text = document.createElement('p')
text.innerHTML = 'Hola mundo desde Webpack'
text.classList.add('text')
document.getElementById('text').appendChild(text)
