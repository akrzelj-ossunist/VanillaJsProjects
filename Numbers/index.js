const addOne = (article, len) => {
    let val = 0
    let counter = setInterval(() => {
        val += Math.ceil(len / 1000)
        if(val < +len)
            article.querySelector('h1').textContent = `${val}+`
        else{
            article.querySelector('h1').textContent = `${len}+`
            clearInterval(counter)
        }       
    },1)
}

let articles = document.querySelectorAll('.article')
for(let i = 0; i < articles.length; i++)
    addOne(articles[i],articles[i].querySelector('h1').textContent.slice(0,-1))
