// condicionales
// Operadores de asignacion
let total = 0
let a = 4
let b = 5

total =  a + b

// total = total + 5
// total += 5

// total = total - 3
// total -= 3

// total = total * 2
// total *= 2

// total = total / 3
// total /= 3

// total = total % 3
// total %= 3


// console.log(total)

/* ----------- Condicionales  if / else if / else ---------------*/

if ( 2 === "2" ) { // false
    console.log('son iguales')
    // pueden ir más indicaciones ...
} else if ( 3 ===  "3" ) { //false
    console.log('son iguales 3')
} else {
    //default
    console.log('por defecto')
}

console.log('entro aquí')


// ----------------Operador ternario
// sintaxiss-------expresion ? true : false

let numero = 3

// si utilizamos if es más largo
// if( numero % 2 === 0 ){
//     console.log('es par')
// } else {
//     console.log('es impar')
// }

//------------simplificamos con operador ternario una línea
// numero % 2 === 0 ? console.log('Es par') : console.log('es impar')

// --------------es lo mismo pero indentado si cabe no es necesario pero es más legible de esta forma
// numero % 2 === 0 
//     ? 
//     console.log('es par')
//     : 
//     console.log('es impar')

//------------aquí utilizamos valores boleanos para designar el valor
// let esPar = numero % 2 === 0 ? true : false
// console.log(`El numero ${numero} es ${esPar === true ? 'par' : 'impar' } `)

// switch
//let age = parseInt( prompt('cuál es tu edad', 17) )

//switch (age) {
//    case 17:
//        console.log('eres menor de edad')
//        break
//    case 18: 
//        console.log('eres mayor de edad')
//        break
//    default:
//        console.log('no es una edad valida')
//        break
//}

// puedes sustituir los valores numericos por valores booleanos
let age = parseInt( prompt('cuál es tu edad', 15) )
let isAge = age >= 18 ? true : false

switch (isAge) {
    case true:
        console.log('eres mayor de edad')
        break
    case false: 
        console.log('eres menor de edad')
        break
    default:
        console.log('no es una edad valida')
        break
}