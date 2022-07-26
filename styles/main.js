/*************** SHOW MENU ***************/
const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu')

const showMenu = ()=>{
    menu.classList.add('show')
}

menuButton.addEventListener('click', event=>{
    event.currentTarget.classList.add('display-none')
    showMenu()
})

/*************** CLOSE MENU ***************/
const closeButton = document.querySelector('#close-button');

const closeMenu = ()=>{
    menu.classList.remove('show')
}

const showMenuButton = ()=>{
    menuButton.classList.remove('display-none')
}

closeButton.addEventListener('click', ()=>{
    closeMenu()
    showMenuButton()
})
