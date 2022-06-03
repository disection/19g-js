// Ejercicio
/**
 * Del siguiente objeto
 * Realizar una función que 
 * 1. Calcule el numero de empleados
 * 2. Obtenga el total a pagar
 * employesAndTotal( { 'Albert': 50000, 'jorge': 50000 })
 * -> Son 3 empleados y el total es 100000
 */

 let salarios = {
    'juan': 30000,
    'Albert': 50000,
    'jorge': 50000
}

const employesAndTotal = ( obj ) => {
    let total = 0
    let numberEmployes = 0

    for(elemento in obj){
        total += obj[elemento]
        numberEmployes++
    }
    return console.log (` Son ${numberEmployes} empleados y el total de los salarios es de ${total}`)

}
employesAndTotal(salarios)

/**
 * Ejercicio 2.
 * Dado un objeto inicial, hacer los siguientes puntos 
 * 
 * 1. Agregar el lenguaje 'Go' a la lista de lenguajes
 * 2. Cambiar el nivel a 4
 * 3. Eliminar la propiedad avatar
 * 4. Agregar una nueva propiedad de edad y poner el valor de 30
 * 5. Imprimir en consola todos los lenguajes dominados
 * 6. Clonar el objeto en uno nuevo
 * 7. Imprimir en consola el nuevo objeto
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

 let koder = {
    languages: ["JavaScript", "Python", "Ruby"],
    isMentor: true,
    level: 3,
    avatar: "https://picsum.photos/200/300"
}


/**
 * Estudiar los metodos de objetos
 * https://www.w3schools.com/js/js_object_methods.asp
 * https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript
 * https://www.programiz.com/javascript/library/object/assign
 * 
 */
let koders = [
    {
        name : 'Erik',
        lastName: 'Gutierrez',
        age : 20,
        generation : 15,
        modulos : ['Node'],
    },
    {
        name : 'Erik',
        lastName: 'Gutierrez',
        age : 20,
        generation : 15,
        modulos : ['Node'],
    }
]
koders.forEach((objCompleto, index, arrayObj)=>{
    console.log(`${objCompleto.name} ${objCompleto.lastname} tiene ${objCompleto.age}años y es de la generación ${objCompleto.generation}`)
})
//---------------------
let totalAge = 0
koders.forEach( ( objCompleto, index, arrayObj )=>{
    totalAge = totalAge + objCompleto.age
})
console.log(totalAge)
//-------------------
let totalModules = 0
koders.forEach( ( objCompleto, index, arrayObj )=>{
    totalModules = objCompleto.modulos.length
})
console.log(totalModules)
//-----------------------
let totalAgeRed = koders.reduce( (acc, cv) => {acc + cv.age} , 0 )
console.log(totalAgeRed)


let library = [
    {
        author : 'Bill Gates',
        title : 'The Road Ahea',
        readingStatus : true
    }
]

let totalReading = library.reduce ((total, libro)=> {
    return libro.readingStatus ? total += : total
})



//-----------------------------------