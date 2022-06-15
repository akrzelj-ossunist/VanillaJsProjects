const modal = document.getElementsByName('open')[0]
const close = document.getElementsByName('close')[0]
const showModal = document.getElementsByClassName('modal')[0]

modal.addEventListener('click', () => {
    showModal.classList.toggle('show')
})

close.addEventListener('click', () => {
    showModal.classList.toggle('show')
})