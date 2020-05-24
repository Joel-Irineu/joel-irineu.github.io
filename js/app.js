// menu responsivo
const openNav = document.querySelector('.openNav')
const menu = document.querySelector('.menu')

openNav.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    openNav.classList.toggle('open')
})
// scroll suave
const menuItens = document.querySelectorAll('.listMenu li a[href^="#"]')

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event){
    event.preventDefault()
    const element = event.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop

    window.scroll({
        top: to - 95,
        behavior: "smooth",

    })
}