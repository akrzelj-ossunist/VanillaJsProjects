const sidebar = document.getElementsByClassName('side-menu')[0]
const ham = document.getElementsByClassName('ham')[0]

ham.addEventListener('click', () => {
    sidebar.classList.toggle('activate')
})