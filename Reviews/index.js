const person = [
    {
      name: "susan smith",
      job: "web developer",
      picture: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      description: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      name: "anna johnson",
      job: "web designer",
      picture: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      description: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      name: "peter jones",
      job: "intern",
      picture: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      description: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      name: "bill anderson",
      job: "the boss",
      picture: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      description: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

const article = data => {
    return(
       `<img src='${data.picture}'>
        <p class="name">${data.name}</p>
        <p class="job">${data.job}</p>                
        <p class="description">${data.description}</p>`
    )
}

let position = 0
const prev = document.getElementsByName('prev')[0]
const next = document.getElementsByName('next')[0]
const suprise = document.getElementsByName('suprise')[0]

document.querySelector('article').innerHTML = article(person[position])

prev.addEventListener('click', () => {
    if(!position)
        position = person.length - 1
    else
        position -= 1
    document.querySelector('article').innerHTML = article(person[position])
})

next.addEventListener('click', () => {
    if(position === person.length - 1)
        position = 0
    else
        position += 1
    document.querySelector('article').innerHTML = article(person[position])
})

suprise.addEventListener('click', () => {
    let num = Math.floor(Math.random() * person.length)
    while(num === position)
        num = Math.floor(Math.random() * person.length)
    position = num
    document.querySelector('article').innerHTML = article(person[position])
})

