const play = document.getElementsByName('play')[0]
const stop = document.getElementsByName('stop')[0]

play.addEventListener('click', () => {
    document.querySelector('video').play()
    play.style.background = 'hsl(205, 89%, 70%)'
    play.style.color = 'hsl(205, 89%, 70%)'
    stop.style.background = 'white'
    stop.style.color = 'black'
})

stop.addEventListener('click', () => {
    document.querySelector('video').pause()
    stop.style.background = 'hsl(205, 89%, 70%)'
    stop.style.color = 'hsl(205, 89%, 70%)'
    play.style.background = 'white'
    play.style.color = 'black'
})