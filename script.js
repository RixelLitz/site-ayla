const hamburguer = document.querySelector("#hamburguer")
const navmenu = document.querySelector("#nav-links")

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active")
  navmenu.classList.toggle("active")
})
