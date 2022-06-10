// VERBOS http ->
// payload
// JSON.parse(str) -> obj
// JSON.stringify(obj) -> obj

 
// Create POST
// Read GET
// Update 
//   PATCH (actualiza solo un fragmento o todo) 
//   PUT (actualiza todo)
// Delete DELETE

const createUser =  ( objUser ) => {
  console.log(JSON.stringify(objUser))
  const xhttp = new XMLHttpRequest()
  xhttp.open( "POST",  
    "https://lorekoderjs19-default-rtdb.firebaseio.com/users/.json", true)
  xhttp.onload = function(data) {
    console.log(data)
      if(data.target.status >= 200 && data.target.status <= 399){
          console.log(data.target.response)
      }
  }
  xhttp.send( JSON.stringify(objUser) )
}

// createUser( user )

// let user = {
//   name : 'Carol',
//   lastName : 'Savedra',
//   age : '38'
// }

const updateUser = ( idUser, userUpdated ) => {
  const updatexhr = new XMLHttpRequest( )
  updatexhr.open('PATCH',`https://lorekoderjs19-default-rtdb.firebaseio.com/users/-N4AKDmEe6JRBlC4yxH0.json`,true)

  updatexhr.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399 ){
      console.log(response.target)
      console.log(response.target.response)
    }
  }
  updatexhr.send( JSON.stringify(userUpdated) )
}


// let objUpdate = {
//   name : 'Carol',
//   lastName : 'Savedra',
//   age : '38'
// }

const updateUserPUT = ( userUpdated ) => {
  const updatexhr = new XMLHttpRequest( )
  updatexhr.open('PUT','https://lorekoderjs19-default-rtdb.firebaseio.com/users/-N4AKDmEe6JRBlC4yxH0.json',true)

  updatexhr.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399 ){
      console.log(response.target)
      console.log(response.target.response)
    }
  }
  updatexhr.send( JSON.stringify(userUpdated) )
}

const deleteUser  = ( idUser ) => {
  const deletexhr = new XMLHttpRequest()
  deletexhr.open(
    'DELETE', 
    `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`, 
    true
  )
  deletexhr.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399){
      console.log(response.target)
      console.log(response.target.response)
    }
  }
  deletexhr.send()
}
