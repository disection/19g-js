/**
 * Funcion que pida una palabra al usuario
 * Invierta la palabra
 * y la retorne en un alert
 * reversedString('hola') -> 'aloh' 
 */

// function stringReverse( str ) {
//     let b =""
//     let longitudStr = str.length-1
//     for( let i = longitudStr; i >= 0 ; i -- ){    
//         b += str[i]       
//     }  
//     window.alert(b) 
// }
// let word = prompt( 'Introduzca una palabra: ' )
// let reverse = stringReverse ( word )
// console.log( reverse )
 

/**
 * Funcion que pida 3 numeros como parametro
 * 2 numeros obligatorios y 1 opcional con valor de 3
 * Arroje la suma de esos 3 numeros
 * Posibles resultados
 * -> addThreeNumbers(3,4,5) -> 12
 * -> addThreeNumbers(3,4) -> 10
 * -> addThreeNumbers(3) -> 'Faltan datos'
 * -> addThreeNumbers() -> 'Faltan datos'
 */

// function addTrheeNumbers( numberOne , numberTwo , numberThree =0 ){
//     if ( !( numberOne && numberTwo && numberThree) ) {
//         console.error ('Faltan datos' )
//     } else {
//         return numberOne + numberTwo + numberThree
//     } 
// }
  
// let one = parseInt(prompt("Escribe un número", 0));
// let two = parseInt(prompt("Escribe otro número", 0));
// let three = parseInt(prompt("Escribe un último número", 0));

// let suma = addTrheeNumbers(one, two, three)
// console.log (suma)

/**
 * Funcion que pida al usuario los grados Centigrados en su localidad
 * Convertirlos a grados fahrenheit
 * Arrojar un alert con el resultado
 * -> convertTemp(25) -> La temperatura es de 77 ºF
 * -> convertTemp() -> 'Faltan datos'
 */
function convertFahrenheit( centigrade ) {
    if (!centigrade) {
        window.alert ( 'Faltan datos' )
    } else {
        F = ( centigrade * 9/5 ) + 32
        let convertion = `La temperatura es de ${F} °F`
        window.alert (convertion)
    }
}
let temperatureC = prompt( '¿Cuál es la temperatura en grados Centigrados en tu localidad?', 13 )
let temperatureF = convertFahrenheit( temperatureC )
 console.log ( temperatureF )


/**
 * Funcion que imprima las tablas del 1 al 10
 */

 function multiplication(){
    for (let i=1 ; i <= 10 ; i++){
        for (let j=1; j<=10; j++){
            console.log(`${i} x ${j} = ${counter * i}`)
        }
    console.log("*****************")
    }
}
console.log ( temperatureF )

/**
 * Funcion que pida al usuario un numero (N) entre 1 y 100 
 * Mandar un alert con suma de 1 a N
 * Valor por defecto 3
 * addNumberLimit() -> 6
 * addNumberLimit(4) -> 10
 * addNumberLimit(5) -> 15
 */
 function addNumber( number = 3 ){
    if( number >= 1 && number <= 100){
        let total= 0
        for (let i= 1 ; i <= N; i++){
            total += i
        } window.alert(total)
    } else{
        window.alert( 'Vuelve a ingresar, valor invalido' )
    }
}

let numb = Number(prompt("Por favor ingresa un número: "))
let cadenaSumas = addNumber(numb)
console.log(cadenaSumas)