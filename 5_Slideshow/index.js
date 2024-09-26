const images = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/4.jpg",
    "assets/5.jpg",
    "assets/6.jpg",
    "assets/7.jpg",
    "assets/8.jpg",
]

let slideshow = document.getElementById('slideshow')
let index = document.getElementById('index')
let currIndex = 0


//event listeners
document.addEventListener('mousedown', (event)=> {
    if(event.button === 0){
        nextImage()
    }
    if(event.button === 2){
        prevImage()
    }
})
document.addEventListener('keydown', (event)=> {
    switch(event.key){
        case "ArrowUp":
        case "PageUp":
            nextImage()
            break
        case "ArrowDown":
        case "PageDown":
            prevImage()
            break
    }
})


function nextImage(){
    currIndex = (currIndex+1) % images.length
    slideshow.src = images[currIndex]
    index.textContent = `${currIndex+1}/8`
}
function prevImage(){
    currIndex = (currIndex-1+images.length) % images.length
    slideshow.src = images[currIndex]
    index.textContent = `${currIndex+1}/8`
}
