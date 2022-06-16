
//fetch()
// promesa
// 1. pendiente
// 2. resuelta / rechazada

// estructura ------------------------------------
// const fetch = () =>{
//     return new Promise( (resolve, reject) => {
//         resolve('todo ok')
//         reject('todo mal')
//     })
// }

// ejercicio 1 -------------------------------------------------
// peticiones GET DELETE
fetch('https://lorekoderjs19-default-rtdb.firebaseio.com/koders/.json')
.then( response => {
    // comprobamos que el estatus de la respuesta es falso
    if (!response.ok) {
        // si si, lanzamos un error con un mensaje
        throw new Error(`Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`)
    } else {
        // sino, retornamos la respuesta al siguiente then
        return response.json()
    }
})
.then( (response)=> {
    console.log(response)
    let template = ''
    for(koder in response) {
        let {name, username, age, } = response[koder]
        template += `
            <li>${name}</li>
        `
    }
    document.querySelector('#lista__koders').innerHTML = template
})
.catch( err => {
    console.log(err)

})

// POST, PUT, PATCH

// GET
// options -> objeto con varias propiedades

//texto plano
// notacion JSON
let objKoder = {
    name: 'lorena',
    bootcamp: 'js'
}
// mínimo necesario
fetch('url', options)

// estructura completa POST

fetch ( 'url' , { 
    method: 'GET/POST/DELETE/PACTCH',
    body: JSON.stringify(objKoder),
    headers: {
        "Content-type": "application/json; charset=UTF-8"   
    }
} )
.them(( response ) => {
    return response.json()
})
.them( (finalResponse ) => {
    console.log(finalResponse)
})
.catch( (err) => {
    console.log(error)
})

// esto es lo que regresa el servidor 
// {
//     name: 'hash/idObj'
// }

