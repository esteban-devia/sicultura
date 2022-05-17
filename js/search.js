const check = document.querySelectorAll('input[type="radio"]')

check.forEach(e => {
    e.addEventListener("click", function () {
        const results = document.querySelector(".results")
        if (e.id == "grid") {
            results.classList.add('twoColumns')
        }
        else {
            results.classList.remove('twoColumns')
        }
    })
})

const filter = document.querySelector("#filterSearch")
filter.addEventListener("click", function () {
    const filtermob = document.querySelector(".filtersearch")
    filtermob.style.display = "block"
})
