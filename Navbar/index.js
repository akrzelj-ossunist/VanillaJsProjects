const dropHam = document.getElementsByClassName('ham')[0]
const dropNav = document.getElementsByClassName('links-drop')[0]


dropHam.addEventListener('click', () => {
    dropNav.classList.toggle('active')
})