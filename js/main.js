const navMenu = document.querySelector(".nav-container")

const toggleBar = document.querySelector(".fa-bars-staggered")

const navList = document.querySelector(".nav-list")

toggleBar.addEventListener("click", function () {
  navMenu.classList.toggle("show-menu")
})
