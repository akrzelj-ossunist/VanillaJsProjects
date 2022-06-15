const clickMe = document.getElementsByName('clickMe')[0]
const simple = document.getElementsByName('simple')[0]
const hex = document.getElementsByName('hex')[0]

let mode = 1;

simple.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white'
    document.querySelector('nav').style.boxShadow = '0px 10px 10px rgb(196, 187, 187)' 
    document.querySelector('section').innerText = 'Background Color: ' + '#F1f5f8'
    mode = 1
})

hex.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white'
    document.querySelector('nav').style.boxShadow = '0px 10px 10px rgb(196, 187, 187)'
    document.querySelector('section').innerText = 'Background Color: ' + '#F1f5f8'
    mode = 0
})

clickMe.addEventListener('click', () => {
    let arr;
    if(mode)
        arr = ['red', 'green','rgb(241, 80, 37)', 'rgb(133 , 122, 200)']
    if(!mode)
        arr = ['blue', 'yellow','rgb(241, 80, 37)', 'rgb(133 , 122, 200)']

    color = arr[(Math.random() * (3 - 1 + 1) + 0).toFixed()]
    colorNow = document.body.style.backgroundColor
    while(arr.indexOf(color) === arr.indexOf(colorNow)){
        color = arr[(Math.random() * (3 - 1 + 1) + 0).toFixed()]
    }
    document.querySelector('section').innerText = 'Background Color: ' + color
    document.querySelector('nav').style.boxShadow = 'none'
    document.body.style.backgroundColor = color
    

})