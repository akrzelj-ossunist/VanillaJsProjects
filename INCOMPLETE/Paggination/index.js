const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const fetchData = () => {
    let bodyTemp = document.body.innerHTML
    document.body.innerHTML = `<h1 class="loading">Loading...</h1><div class="load"></div>`
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        person = data.map(el => {
            return {
                img: el.avatar_url,
                name: el.login,
                profile: el.html_url
            }
        })
        document.body.innerHTML = bodyTemp
        Math.ceil(person.length / 12)
        createButtons(Math.ceil(person.length / 12))
        setupUsers(person)
    })
}
fetchData()

const createButtons = num => {
    let buttons = '';
    for(let i  = 1; i <= num; i++)
        buttons += `<button name="${i}">${i}</button>`
    document.querySelector('.numButtons').innerHTML = buttons
}

let position = 1;
const setupUsers = users => {
    let getUsers = users.slice(0, 12)
    document.querySelector('.buttons').querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            if(button.name === 'prev')
                position === 1 ? position = Math.ceil(users.length / 12): position -= 1
            else if(button.name === 'next')
                position === Math.ceil(users.length / 12) ? position = 1: position += 1
            else
                position = +button.name
            let start = 12 * position - 12
            let stop = 12 * position
            getUsers = users.slice(start, stop)
            printUsers(getUsers)
        })
    })
    printUsers(getUsers)
}

const printUsers = users => {
    document.querySelector('.users').innerHTML = users.map(user => {
        return(
            `<article>
                <img src="${user.img}">
                <p>${user.name}</p>
                <button><a href="${user.profile}">Show profile</a></button>
            </article>`
        )
    }).join('')
}