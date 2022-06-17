const answers = {
    btn1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.',
    btn2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.',
    btn3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.'
}

document.querySelectorAll('article').forEach(article => {
    article.querySelector('button').addEventListener('click', () => {
        article.querySelector('p').classList.toggle('active')
        if(article.querySelector('p').innerHTML === ''){
            article.querySelector('p').innerHTML = answers[article.querySelector('button').name]
            article.querySelector('button').innerHTML = '<i class="far fa-minus-square"></i>'
        }
        else{
            article.querySelector('p').innerHTML = ''
            article.querySelector('button').innerHTML = '<i class="far fa-plus-square"></i>'
        }
    })
})