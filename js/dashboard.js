const user = document.querySelector(".user")

user.addEventListener("click", function () {
    const closeSession = document.querySelector(".closeSession")
    closeSession.classList.toggle("active")
})