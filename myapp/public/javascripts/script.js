const imgs = document.getElementById('img')
const img = document.querySelectorAll('#img img')

let algo = 0 

function carousel() {
    algo++

    if (algo > img.length -1) {
        algo = 0
    }

    imgs.style.transform = `translateX(${-algo * 500}px)`
}

setInterval(carousel, 1800)