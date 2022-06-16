const url = "https://randomuser.me/api/";

const getUser = () => fetch(url).then(resp => resp.json()).then(data => {
    let person
    console.log(data)
    person = {
      picture: data.results[0].picture.large,
      firstName: data.results[0].name.first,
      lastName: data.results[0].name.last,
      email: data.results[0].email,
      age: data.results[0].dob.age,
      street: data.results[0].location.street.name,
      phone: data.results[0].phone,
      password: data.results[0].login.password,
    }
    firstPage(person)
    displayData(person)
})
getUser()

const firstPage = user => { 
  document.querySelector('p').innerHTML = `${user.firstName} ${user.lastName}`
  document.querySelector('img').src = user.picture 
  document.querySelector('h4').innerHTML = `My name is`
}

const displayData = user => document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    if(button.name === 'name'){
      document.querySelector('h4').innerHTML = `My ${button.name} is`
      document.querySelector('p').innerHTML = `${user.firstName} ${user.lastName}`
    }
    else if(button.name !== 'random'){
      document.querySelector('h4').innerHTML = `My ${button.name} is`
      document.querySelector('p').innerHTML = user[button.name]
    }
      
  })
})

document.querySelector('.random').addEventListener('click', () => {
  getUser()
})