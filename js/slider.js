const sliderSingle = document.querySelectorAll(".sliderSingle")
const sliderGroup = document.querySelector(".sliderGroup")
var count = 0;

sliderGroup.style.width = `${sliderSingle.length * 100}%`
const prev = document.querySelector(".sliderPrime .prev")
const next = document.querySelector(".sliderPrime .next")

const bullets = document.querySelector(".bullets")
for (let n = 0; n < sliderSingle.length; n++) {
    const newbullet = document.createElement('div')
    newbullet.classList.add("bullet")
    bullets.appendChild(newbullet)
}
const bullet = document.querySelectorAll(".bullet")
bullet[0].classList.add("active")

prev.addEventListener("click", function () {
    prevSlide()
})
next.addEventListener("click", function () {
    nextSlide()
})

function prevSlide() {
    count = count - 1
    if (count < 0) {
        for (let i = 0; i < sliderSingle.length; i++) {
            sliderSingle[i].style.transform = `translateX(-${(sliderSingle.length - 1) * 100}%)`
        }
        count = sliderSingle.length - 1
    }
    else {
        for (let i = 0; i < sliderSingle.length; i++) {
            sliderSingle[i].style.transform = `translateX(-${(count) * 100}%)`
        }
    }
    for (let n = 0; n < bullet.length; n++) {
        bullet[n].classList.remove("active")
    }
    bullet[count].classList.add("active")
}
function nextSlide() {
    count = count + 1
    if (count > sliderSingle.length - 1) {
        for (let i = 0; i < sliderSingle.length; i++) {
            sliderSingle[i].style.transform = `translateX(0%)`
        }
        count = 0
    }
    else {
        for (let i = 0; i < sliderSingle.length; i++) {
            sliderSingle[i].style.transform = `translateX(-${(count) * 100}%)`
        }
    }
    for (let n = 0; n < bullet.length; n++) {
        bullet[n].classList.remove("active")
    }
    bullet[count].classList.add("active")
}
if (screen.width <= 1112) {
    var clientX = 0
    var deltaX
    sliderGroup.addEventListener("touchstart", function (e) {
        console.log(`Start: ${e.touches[0].clientX}`)
        clientX = e.touches[0].clientX
    })
    sliderGroup.addEventListener('touchend', function (e) {
        console.log(`End: ${e.changedTouches[0].clientX}`)
        console.log(`Diff: ${e.changedTouches[0].clientX - clientX}`)
        deltaX = e.changedTouches[0].clientX - clientX
        if (deltaX < 0) {
            nextSlide()
        }
        else if (deltaX > 0) {
            prevSlide()
        }
    })
}