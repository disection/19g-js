/**
 * Metodos de objetos
 * Sintaxis
 * Object.methodName()
 */

// CRUD
// Object.keys(obj) devuelve las llaves de un objeto

let obj ={
    'name' : 'Lorena',
    'lastName' : 'Terrazas'
}

// ['name], ['lastName']

let arrKeys = []
for ( property in obj){
    arrKeys.push (property)

}
console.log(arrKeys)

//----Utilizar método---------------
// Object.keys(obj)
//te devuelve-> [key, key, key]
let llaves = objects.keys( obj )
console.log( llaves )

llaves.forEach( (llave) =>{
    console.log( obj[llave])
})

// [].forEach()

// Object.assing()
// sintaxis
// Object.assing ( obj, obj )
// parametros (nombre de donde voy a guardar las propiedades, y de donde lo vamos a copiar) asigna las propiedades de un objeto a otro copiandolas y pegandolas en otro objeto

let obj1 = {
    name : 'Jorge'
}
let obj2 = {
    lastName : 'Camarillo',
    age : 30,
    name : 'Lore'
}

Object.assingn( obj1, obj2)

// Object.entries()
// -> [ [key, value] , [key, value] ] transformar de la estructura de un objeto a a una estructura de un array

let resultEntries = Object.entries(obj)
console.log(resultEntries)

// Object.values( obj )
// Sintaxis
// -> [ value1, values2, ... ]

let resultValues = Objects.values (ojb)
console.log( resultValues )

// Object.freeze( obj ) INVESTIGAR EJEMPLO
// no permite modificacones pero puedes agregar o eliminar propiedades
// Create, Read, Update, delete
// -> Read

// Object.create(obj)
// se establece la estructura base de un koder
// nos crea un objeto a partir de otro objeto heredando todas la propiedades usando lo de molde

let koderBase = {
    name: 'basename',
    lastName: 'baseLastName'
}

let newKoder = Object.create(koderBase)
console.log(koderBase)
console.log(newKoder)

// Object.seal()
// recibe un paraetro es el objeto que va a congelar, el objeto no puede modificarse ni agregarle ninguna propiedad
// Create, Read, Update, delete
// -> Read, Update

let objSeal = {
    'name' : 'kike',
    'lastName' : 'Acosta'
}


// let objEmpleado = {
//     name : 'Lorena',
//     age : 30,
//     salario : 3000,
//     puesto : 'Gerente',
//     idEmpleado : 1000,
// }

let saliarios = {
    'lorena' : 300,
    'mario' : 400,
    'juan' : 500,
    'Cris' : 700,
}

let totalEmpleados = Object.keys(salarios). length
let total =
Object.values(salarios).reduce( ( acc, salario) => acc + salario )

let totalFinal = 0
Object.values(salarios).forEach( (salario) => totalFinal += salario)

 