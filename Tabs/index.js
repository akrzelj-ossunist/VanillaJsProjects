const history = document.getElementsByName('history')[0]
const vision = document.getElementsByName('vision')[0]
const goals = document.getElementsByName('goals')[0]

const contentArr = [
    `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. 
     Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 
     8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,

    `Vision Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. 
    Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. 
    Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. 
    Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,

    `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. 
    Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, 
    mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. 
    Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, 
    banh mi salvia venmo photo booth quinoa chicharrones.`,
]

const content = document.querySelector('.content')

content.innerHTML = `<h1>History</h1><p>${contentArr[0]}</p>`
history.style.backgroundColor = 'white'

history.addEventListener('click', () => {
    history.style.backgroundColor = 'white'
    vision.style.backgroundColor = 'hsl(212, 33%, 89%)'
    goals.style.backgroundColor = 'hsl(212, 33%, 89%)'
    content.innerHTML = `<h1>History</h1>
                         <p>${contentArr[0]}</p>`
})

vision.addEventListener('click', () => {
    history.style.backgroundColor = 'hsl(212, 33%, 89%)'
    vision.style.backgroundColor = 'white'
    goals.style.backgroundColor = 'hsl(212, 33%, 89%)'
    content.innerHTML = `<h1>Vision</h1>
                         <p>${contentArr[1]}</p>
                         <ul>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                         </ul>`
})

goals.addEventListener('click', () => {
    history.style.backgroundColor = 'hsl(212, 33%, 89%)'
    vision.style.backgroundColor = 'hsl(212, 33%, 89%)'
    goals.style.backgroundColor = 'white'
    content.innerHTML = `<h1>Goals</h1>
                         <p>${contentArr[2]}</p>`
})