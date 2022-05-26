console.log('Hola koders!!')

//crear variables
// let, const, var
// palabras reservadas
// BEM --- Bloque__elemento--modificador (metodología para css)

// constantes
const koder3 = 'Ernesto' //no la puedo modificar

var koder = 'Jorge' //se pueden modificar
let koder2 = 'Noemi' //se pueden modificar
console.log( koder, koder2, koder3)

koder ='Luis'
koder2 = 'Lorena'
console.log(koder, koder2, koder3)

const URL = 'https://www.google,com' 
const PI = 3.1416
// scope
// let para variables
// const para constantes

//concatenar variables
// operador typeof -> sirve para poder saber que tipo de variable es
let valor1 = 4
let valor2 = 5

console.log(valor1 + valor2)

// console.log('string' + variable)
let koderExample = 'Jorge'
let nombreConcatenado = 'Hola '+ koderExample
console.log(nombreConcatenado)

// template strings + string literals-------------- buenas prácticas
// placeholders -> espacio designado para poner una variable ${}
// `string ${variables}`
const age = 30
console.log(`otra cosa ${koderExample}, cómo estas? Tienes ${age + 5} son las 20:30 ${koder}`) //también puedo hacer operaciones dentro del placeholder

// Pedir variables al usuario
// formularios
// prompt (mensaje, valorDelMensajePorDefecto)

/*
let nombreKoder = prompt('Dame tu nombre', 'Jorge')

if(nombreKoder === null){
     console.log('Nombre vacio')
}else{
    console.log(nombreKoder)
    // ...
}

// Convertir strings a números
let ageKoder = prompt('Dame tu edad', 30)
console.log(ageKoder)
let newAgeKoder = parseInt(ageKoder)
console.log(newAgeKoder)
*/

//pedir al usuario los grados celsius en su localidad
// convertir °C to °F
//celsius * 9/5 +32
//calcular los °F

let temperatura = prompt('Grados celsius en tu localidad', 20)
if(temperatura !== null){
    console.log(`la temperatura en °F ${temperatura * 9/5 + 32}`)

}else{
    console.log('No se ingresaron datos')
}





//Condicionales