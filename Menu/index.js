const menu = [
    {
        category: 'breakfast',
        name: 'Buttermilk Pancakes',
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        picture: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg',
        price: '$15.99',
    },
    {
        category: 'breakfast',
        name: 'Bacon Overflow',
        description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        picture: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg',
        price: '$8.99',
    },
    {
        category: 'breakfast',
        name: 'Country Delight',
        description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        picture: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg',
        price: '$20.99',
    },
    {
        category: 'lunch',
        name: 'Diner Double',
        description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        picture: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg',
        price: '$13.99',
    },
    {
        category: 'lunch',
        name: 'American Classic',
        description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        picture: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg',
        price: '$12.99',
    },
    {
        category: 'lunch',
        name: 'Egg Attack',
        description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        picture: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg',
        price: '$22.99',
    },
    {
        category: 'shakes',
        name: 'Godzilla Milkshake',
        description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        picture: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg',
        price: '$6.99',
    },
    {
        category: 'shakes',
        name: 'Quarantine Buddy',
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        picture: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg',
        price: '$16.99',
    },
    {
        category: 'shakes',
        name: 'Oreo Dream',
        description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        picture: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg',
        price: '$18.99',
    },
    {
        category: 'dinner',
        name: 'Steak Dinner',
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        picture: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg',
        price: '$39.99',
    },
]
 
const article = data => {
    return(
       `<article>
            <img src='${data.picture}'>
            <div class="description">
                <div>
                    <p>${data.name}</p>
                    <p>${data.price}</p>
                </div>
                <p class="text">${data.description}</p>
            </div>
        </article>`
    )
}

const btns = document.querySelectorAll('button')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.name
        if(category === 'all')
            document.querySelector('main').innerHTML = all
        else
            document.querySelector('main').innerHTML = menu.map(data => data.category === category ? article(data): '').join('')
    })
})

const all = menu.map(data => article(data)).join("")

document.querySelector('main').innerHTML = all