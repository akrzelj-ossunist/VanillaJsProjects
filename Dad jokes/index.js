const url = 'https://icanhazdadjoke.com/';

const getJoke = document.getElementsByClassName('botun')[0]

fetch(url, { headers: { Accept: 'application/json', 'User-Agent': 'learning app' } })
.then(resp => resp.json())
.then(data => document.querySelector('h1').textContent = data.joke)

getJoke.addEventListener('click', () => {
    fetch(url, { headers: { Accept: 'application/json', 'User-Agent': 'learning app' } })
    .then(resp => resp.json())
    .then(data => document.querySelector('h1').textContent = data.joke)
})

