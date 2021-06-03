const menu = document.getElementById('menu');
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click', showMenu)
closeBtn.addEventListener('click', closeMenu)

function showMenu() {
    closeBtn.classList.remove('close-btn')
    openBtn.style.display = 'none'
    menu.style.display = 'block'
}

function closeMenu() {
    closeBtn.classList.add('close-btn')
    openBtn.style.display = 'block'
    menu.style.display = 'none'
}