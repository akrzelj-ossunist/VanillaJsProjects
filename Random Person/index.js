const url = "https://randomuser.me/api/";

const getUser = async () => await fetch(url).then(resp => resp.json()).then(data => { 
    let person = {
      picture: data.results[0].picture.large,
      name: `${data.results[0].name.first} ${data.results[0].name.last}`,
      email: data.results[0].email,
      age: data.results[0].dob.age,
      street: `${data.results[0].location.street.number} ${data.results[0].location.street.name}`,
      phone: data.results[0].phone,
      password: data.results[0].login.password,
    }
    firstPage(person)
    displayData(person)
})
getUser()

const changeBtnColor = button => {
  document.querySelector('.buttons').querySelectorAll('button').forEach(btn => {
    btn.style.color = 'hsl(210, 22%, 49%)'
    btn.style.transform = 'scale(1)'
  })
  button.style.color = '#49a6e9'
  button.style.transform = 'scale(1.3)'
}

const firstPage = user => { 
  document.querySelector('p').innerHTML = `${user.name}`
  document.querySelector('img').src = user.picture 
  document.querySelector('h4').innerHTML = `My name is`
  changeBtnColor(document.querySelector('button'))
}

const displayData = user => document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    if(button.name !== 'random'){
        document.querySelector('h4').innerHTML = `My ${button.name} is`
        document.querySelector('p').innerHTML = user[button.name]
        changeBtnColor(button)
    }
  })
})

document.querySelector('.random').addEventListener('click', () => {
  getUser()
})
