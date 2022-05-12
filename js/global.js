const ham = document.querySelector("#ham")
ham.addEventListener("click", function () {
    const menu = document.querySelector(".mobileNav")
    menu.classList.toggle("active")
})