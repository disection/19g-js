let koders = [
    {
        name: 'Emilio',
        age: 30,
        city: 'Guadalajara',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=68'
    },
    {
        name: 'Juan',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=67'
    },
    {
        name: 'Maria',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=47'
    },
    {
        name: 'Ivonne',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=45'
    },
    {
        name: 'Alex',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=38'
    }
]

// PROMESAS Acciones que se ejecutan en un futuro

// Pendiente
// Resultado: completada, rechazada



// let primerPromesa = new Promise( callback )
let primerPromesa = new Promise( (resolve, reject ) => {
    setTimeout ( ()=> {
        seCumple(koders)
        //reject( new Error('Error al obtener los datos'))
    }, 1500 )
} )
console.log(primerPromesa)

primerPromesa.them( ( responsePromise )=> {
    console.log( responsePromise )
})

// ejemplo 1 analogía-----------------------------------
// declaramos la promesa
let irAlCine = new Promise( (cumplir, noCumplir) => {    
    setTimeout(() => {
        cumplir('Boletos')
        // noCumplir( new Error('No pude conseguir los boletos'))
    }, 3000)
})

// ejecutamos / invocamos esa promesa
irAlCine
.then( (vamosoque) => {
    console.log(vamosoque)
})

// ejemplo 2 ---------------------------------------
let entrarAlBar = new Promise( (resolve, reject) => {
    let age = 18
    console.log('Verificando tu edad')
    if (age >= 18) {
        setTimeout(() => {
            console.log('Edad verificada')
            resolve('Puedes entrar al Bar')
        }, 3000)        
    }else{
        setTimeout(() => {
        console.log('Edad verificada')
        reject('No puedes pasar al Bar')
        }, 3000) 
    }
    
})

// estructura Promesa.then( (response) => {} )
entrarAlBar .then( (response) => {
    console.log(response)
})

// ejemplo 3 ------------------------------------------
// pedir una pizza

// 1. llamar pizzeria
const llamarPizzeria = (resolve, reject) => {
    return new Promise( () => {
        setTimeout(() => {
           resolve('Buenas noches...') 
        }, 1000);
    })
}

// 2. legir la pizza
const elegirPizza = (resolve, reject) => {
    return new Promise( () => {
        setTimeout(() => {
           resolve('Pizza peperoni elegida') 
        }, 2000);
    })
}

// 3. esperar pizza
const esperarPizza = (resolve, reject) => {
    return new Promise( () => {
        setTimeout(() => {
           resolve('esperando pizza...') 
        }, 2000);
    })
}
// 4. pagar pizza
const pagarPizza = (resolve, reject) => {
    return new Promise( () => {
        setTimeout(() => {
           resolve('pagando pizza $$$... ') 
        }, 2000);
    })
}

// 5. disfrutar la pizza
const disfrutarPizza = (resolve, reject) => {
    return new Promise( () => {
        setTimeout(() => {
           resolve('Esta deliciosa') 
        }, 2000);
    })
}


// resolución 1 ------------------------
llamarPizzeria()
.them(response =>{
    console.log(response)
    // paso 2
    return elegirPizza()
})
.them(response =>{
    console.log(response)
    // paso 3
    return esperarPizza()
})
.them(response =>{
    console.log(response)
    // paso 4
    return pagarPizza()
})
.them(response =>{
    console.log(response)
    // paso 5
    return disfrutarPizza()
})
.them(response =>{
    console.log(response)    
})
.catch( (error) => {
    // ***imprime en que parte esta el error***
    console.log(error)
    alert('Algo salio mal con tu pedido: ', error)
})

// manejo de errores/--------------------------------
// error handling
try{
    // intento hacer esto
    // si algo sale mal, envio el error

} catch (error){
    // cachamos el error
}

// resolución 2 ------------------------
// esta estructura se llama promise hell ***INVESTIGAR***
// llamarPizzeria()
// .them(response =>{
//     console.log(response)
//     elegirPizza()
//     .them(response =>{
//         console.log(response)
//         return esperarPizza()
// })
// })




