const url = 'https://course-api.com/javascript-store-products';


//fetched data from url and saved array of objects that are filled with stuff we need from url
//Then we send that object to displayProducts() function
const fetchData = () => {
    document.querySelector('section').innerHTML = '<div class="load"></div>'
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        let products = data.map(el => {
            return {
                url: el.fields.image[0].url,
                name: el.fields.name,
                price: el.fields.price,
                company: el.fields.company,
                colors: el.fields.colors
            }
        })
        displayProducts(products)
    })
}
fetchData()

//In here we print out products from object we sent from fetched url
//After we printed it out we go trough every img and add eventListener to each img so if we click on any we are "sent" to another page
//Inisde event listener we are matching img url and url from object and if they match after click on img we call function printArticle() that print details of clicked article
const displayProducts = products => {
    document.querySelector('section').innerHTML = products.map(article => {
        return(
            `<article>
                <img src="${article.url}">
                <p>${article.name}</p>
                <p>${article.price}</p>   
            </article>
           `
        )
    }).join('')

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            document.querySelector('header').classList.toggle('hide')
            document.querySelector('section').classList.toggle('active')
            products.map(article => {
                if(article.url === img.src)
                    printArticle(article)
            })
        })
    })
}

let text = `Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, 
            authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. 
            Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge`


//In this function we define page for that single article and after that we create click event for home button
//We have to define it in this function bcs home button is not defined before, so if we click on home button we are sent back to home
const printArticle = article => {
    let colors = article.colors.map(color => `<p style="border: 8px solid ${color}; margin-right: 10px; width: 0.5%; border-radius: 100%;" ></p>`)
    colors = colors.join("")
    document.querySelector('section').innerHTML = (
        `
        <article>
            <button name="home">Back Home</button>
            <div class="content">
                <img src="${article.url}">
                <div>
                    <p>${article.name}</p>
                    <p>${article.company}</p>
                    <p>${article.price}</p>   
                    <div style="display: flex">
                        ${colors}
                    </div>
                    <p>${text}</p>
                    <button>Add to cart</button>
                </div>
            <div>
        </article>`
    )
    let home = document.getElementsByName('home')[0]

    home.addEventListener('click', () => {
        document.querySelector('section').classList.toggle('active')
        document.querySelector('header').classList.toggle('hide')
        fetchData()
    })
}
