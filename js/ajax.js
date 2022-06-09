// Ajax
// Asyncronic JavaScrip and XML
// XMLHttpRequest

/**
 * 0: request not initialized
 * 1:server connetcion establishet
 * 2: request reci
 * 3:
 * 4:
 */

// formar request 
// enviar request
// esperar respuesta
// recibir response
// procesar el response

let users = []
// create an XMLHttpRequest object

// function imprime en layout la lista de usuarios
  
  const printUserList = (usersFiltered) => {
    let allUserLayout = usersFiltered.reduce((acc, user, idx, arr) => {
      return acc += `
      <a href="#" class="list-group-item list-group-item-action " aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${user.name}</h5>
        </div>
        <p class="mb-1">${user.phone}</p>
        <small>${user.email}</small>
      </a>
      `
    }, '')
  
    document.getElementById('users__filtered').innerHTML = allUserLayout
  }

const primerPeticion = new XMLHttpRequest()
console.log( primerPeticion )

// Define a callback function
primerPeticion.onload = (userLoad) => {
    // here you can use the Data
    // console.log(userLoad)
    if (userLoad.target.status >= 200 && userLoad.target.status <= 299 ) {
        //console.log(userLoad)
        //console.log(userLoad.target.responseText)

        // JSON
        // metodos.parse( text - object) .stringify(obj - text)
        let responseJSON = JSON.parse(userLoad.target.responseText)
        users = responseJSON 
        //console.log(users)
        printUserList(users)
        
    }
}

// Send a request
// GET, POST, DELETE, PATCH, PUT
primerPeticion.open( 'GET', 'https://jsonplaceholder.typicode.com/users', false )
console.log(primerPeticion)
primerPeticion.send()


// se filtra a partir del string
const filterUsers = ( strToFilter ) => {
    strToFilter = strToFilter.toLowerCase()
    let filteredUsers = users.filter( (user) => {
      if(
        user.name.toLowerCase().includes(strToFilter) ||
        user.username.toLowerCase().includes(strToFilter) ||
        user.email.toLowerCase().includes(strToFilter)
      ){
        return user
      }
    })
    return filteredUsers
  }


  
  
  
  // cuando cargue la pagina, cargar todos los usuarios
  document.addEventListener('DOMContentLoaded',  printUserList(users) )
  
  







