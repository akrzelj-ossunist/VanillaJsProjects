const decrease = document.getElementsByName('decrease')[0]
const reset = document.getElementsByName('reset')[0]
const increase = document.getElementsByName('increase')[0]

decrease.addEventListener('click', () => {
    num = +document.querySelector('p').textContent - 1
    document.querySelector('p').textContent = num
    if(num < 0)
        document.querySelector('p').style.color = 'red'
    if(num === 0)
        document.querySelector('p').style.color = 'black'
})

increase.addEventListener('click', () => {
    num = +document.querySelector('p').textContent + 1
    document.querySelector('p').textContent = num
    if(num > 0)
        document.querySelector('p').style.color = 'green'
    if(num === 0)
        document.querySelector('p').style.color = 'black'
})

reset.addEventListener('click', () => {
    document.querySelector('p').textContent = 0
    document.querySelector('p').style.color = 'black'
})