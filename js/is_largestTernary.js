// 1 combertir en valor tipo  numérico
let first = parseInt(prompt('Dame el primer numero', 0)) 
let second = parseInt(prompt('Dame el segundo numero', 0))

// first > second ? console.log(`${first} es mayor que ${second}`) : console.log(`${second} es mayor que ${first}`)

/*cuando es muy largo para leerse en una línea se puede escribir escalonado 

first > second 
    ? 
    console.log(`${first} es mayor que ${second}`) 
    : 
    console.log(`${second} es mayor que ${first}`) */

// se puede anidar para poder tener un tercer resultado usando el mismo formato
first !== second ? (
        first > second ?
            console.log(`${first} es mayor que ${second}`)
            :
            console.log(`${second} es mayor que ${first}`)
    ) // aqui termina el primer caso
    :
    console.log('Son iguales') //aqui esta el segundo caso donde comprobamos la igualdad

let numberA = parseInt(prompt('ingresa un número', 5 ))
let numberB = parseInt(prompt('ingresa otro número para compararlo', 5 ))

let numberLess = numberA < numberB ? 
    console.log( `${numberA} es menor que ${numberB}` ) 
    : 
    console.log( `${numberB} es menor que ${numberA}` )

numberA !== numberB ?(
    numberA < numberB ?
    console.log(`${numberA} es menor que ${numberB}`)
    :
    console.log(`${numberB} es menor que ${numberA}`)
)
:
console.log(`${numberA} es igual a ${numberB}`)
