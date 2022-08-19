let navOpen = document.querySelector(".header-part__btn")
let navWrapper = document.querySelector(".header-part__info")
let navWrapperOn = document.querySelector(".header-part__info-on")
navOpen.addEventListener("click", () => {
    navWrapper.classList.toggle("header-part__info-on")
})

window.onclick = function (event) {
    if (event.target == navWrapperOn) {
        navWrapperOn.style.display = "none";
    }
}