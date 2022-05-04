const slider_img = document.querySelector('.slider-element')
const btn_left = document.querySelector('.left')
const btn_right = document.querySelector('.right')
const slider_dots = document.querySelector('.slider-dots')


const image_links = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg'
]

let current = 0

for(let i = 0; i < image_links.length; i++){
    let el = document.createElement('li')
    slider_dots.appendChild(el)
}

function render(){
    slider_img.setAttribute('src', image_links[current])

    slider_dots.children[current].classList.add('selected')
}

render()



function turnRight(){
    slider_dots.children[current].classList.remove('selected')
    current++

    if(current > image_links.length - 1){
        current = 0
    }

    render()
}

function turnLeft(){
    slider_dots.children[current].classList.remove('selected')
    current--

    if(current < 0){
        current = image_links.length - 1
    }

    render()
}

btn_right.addEventListener('click', turnRight)
btn_left.addEventListener('click', turnLeft)


// setInterval(turnRight, 3000)