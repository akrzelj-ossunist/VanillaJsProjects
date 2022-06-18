const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const search = document.getElementsByName('search')[0]
search.addEventListener('click', () => {
    fetch(url + document.querySelector('input').value)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        printResult(data.query.search)
    })
})

const printResult = results => {
    console.log(results)
    document.querySelector('section').innerHTML = results.map(result => {
        return(
            `<a href="http://en.wikipedia.org/?curid=${result.pageid}">
                <article>
                    <h1>${result.title}</h1>
                    <p>${result.snippet}</p>
                </article>
            </a>
            `
        )
    }).join('')
}