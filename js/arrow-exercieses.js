/**
 * Funcion que pida una palabra al usuario
 * Invierta la palabra
 * y la retorne en un alert
 * reversedString('hola') -> 'aloh' 
 */

 const reversedString = ( str = 'koder' ) => {
    let strReversed = ''
    for(i= str.length -1 ; i >= 0; i--){
        strReversed += str[i]
    }
    return strReversed
}



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

const addThreeNumbers = ( numberOne, numberTwo, numberThree = 3 ) => {
    // null, undefinded , NaN
    // if(numberOne && numberTwo){
    //     return numberOne + numberTwo + numberThree
    // } else {
    //     console.log('Faltan datos')  
    // }

    return numberOne && numberTwo ? numberOne + numberTwo + numberThree : console.log('Faltan datos')
}

/**
 * Funcion que pida al usuario los grados Centigrados en su localidad
 * Convertirlos a grados fahrenheit
 * Arrojar un alert con el resultado
 * -> convertTemp(25) -> La temperatura es de 77 ºF
 * -> convertTemp() -> 'Faltan datos'
 */


const convertTemp = (grades) => {
    if( !isNaN(celsiusGrade) ){
        let fahrenheitGrade  = (celsiusGrade * 9/5) + 32
        console.log(`La temperatura es de: ${fahrenheitGrade} ºF`)
        
    } else {
        console.log('Faltan datos')
    }
}

// const celsiusGrade = parseInt(prompt('Grados celsius en tu localidad'))
// convertTemp(celsiusGrade)




/**
 * Funcion que imprima las tablas del 1 al 10
 * printTables()
 */
const printTables = () => {
    for( i = 1; i <= 10; i++){
        for(j = 1; j <= 10; j++){
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
}

/**
 * Funcion que pida al usuario un numero (N) entre 1 y 100 
 * Mandar un alert con suma de 1 a N
 * Valor por defecto 3
 * addNumberLimit() -> 6
 * addNumberLimit(4) -> 10
 * addNumberLimit(5) -> 15
 */

 const addNumberLimit = ( limit = 3 ) => {
    let suma = 0
    for( i = 1; i <= limit; i++) {
        suma += i
    }

    return suma
 }