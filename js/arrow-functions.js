// functions
/**
 * 1. Declaración e invoación de funciones
 * 2. Funciones con parametros
 * 3. Funciones con parametro opcionales o valores por defecto
 * 4. Funciones de retorno
 */

// function retorno( a, b)
// if (a > b) {
//     return a
// } else {
//     return b
// }
// // a > b 


// // arrow funtcions -> funciones de flecha

// // sintaxis u
// function suma( a , b ){
//     //sentencias
//      return a + b
// }

// //declaración / inicialización , asigna una funcion a una variable
// const suma = ( a, b ) => { // con varios parametros
//     //sentencias
// }

// const suma = ( a ) => { // con un parametro
//     //sentencias
// }

// const suma =  a  => { // con un parametro
//     //sentencias
// }

// const suma = ( ) => { // sin parametros
//     //sentencias
// }
// console.log ( suma(3,5) )

// //str string
// //  arr Array
// //  obj objeto

// //string reverse
// // formula
// // Declarción / inicialización
// const strReverse = ( str = 'koder' ) => {
//     let strReversed =''
//     for (let i = str.length; i < array.length; i--) {
//         const element = str[i];
        
//     }
//     return strReversed
// }

// // utilizar
// // invocar
//  console.log (str)

 
// ejercicios
// function retorno(a, b){
//     if (a > b){
//         return a
//     }else {
//         return b
//     }
//     //a > b ? a : b
// }
// //Arrow functions --> funciones flechas
// //Const nombre = (parametros) => arrow {
//     //sentencias
// // }
// //declaracion / inicializacion
// const suma = (a, b) => {
//     //sentencias
//     return a + b
// }
// console.log(suma(4,5))


// //Ejercicios
// const strReverse= (str) => {
//     let reverseStr= ''
//     for(let i= str.length - 1 ; i >= 0; i--){
//         reverseStr+= str[i]
//     }
//     return reverseStr
// }
// console.log(strReverse('Hola'))
// const userAdd = (a , b, c=3) => {
//     if ( !a && !b ){
//         window.alert('Faltan datos')
//     }else {
//         window.alert(`La suma de los 3 numeros es igual a ${a + b + c}`)
//     }
// }
// let num1= Number(prompt('Por favor ingresa el primer valor: '))
// let num2= Number(prompt('Por favor ingresa el segundo valor: '))
// let num3= Number(prompt('Por favor ingresa el tercer valor: '))
// let callAdd= userAdd(num1, num2)
// console.log(callAdd)
// const celsiusFahrenheit = (cels) =>{
//     if (!cels){
//         window.alert('Faltan datos')
//     } else {
//         fahrenheit= Number(cels) * 9/5 + 32
//         window.alert(`La temperatura es ${fahrenheit} °F`)
//     }
// }
// let grados=prompt( 'Ingresa la temperatura', 15 )
// let convertir= celsiusFahrenheit( grados )
// console.log( convertir )
// const tablas = () => {
//     for ( let counter = 1 ; counter <= 10; counter++ ){
//         for (i = 1 ; i <= 10 ; i++ ){
//             console.log( `${counter} x ${i} = ${counter*i}` )
//         }
//     console.log('**************')
//     }
// }
// const addNumbers = ( N=3 ) => {
//     if (N >= 1 && N <=100){
//         let total=0
//         for (i = 1; i <= N; i++){
//             total += i
//         } window.alert(`El total de la suma entre los numeros 1 y ${N} es ${total}`)
//     } else {
//         window.alert('Número invalido')
//     }
// }
// let numb=Number( prompt( 'Ingresa un número entre 1 y 100', 3 ) )
// let cadenaSumas=addNumbers( numb = 3 )
// console.log( cadenaSumas )



const palindromo= (str) => {
    let reverseStr= ''
    let strNormal= str
    
    for(i = str.length - 1 ; i >= 0 ; i-- ){
        if (str[i] === ' ') {
            strNormal[i].replace(' ', '')
        } else {
            reverseStr += str[i] 
        }         
    }
    return reverseStr === strNormal

    
}

let frase = prompt('ingresa una frase', 'Lavan esa base naval')

console.log(palindromo(frase))

/************** ejercicio de Jorge **********************/
// Arrow fuunction
// Pedir al usuario una cadena de texto
// Verificar si esa oracion es un palindromo
// isPalindrome('hola') -> No es un palindromo
// isPalindrome('oso') -> SI es un palindromo

// anita lava la tina
// oso
// seres

// funcion de retorno
const isPalindrome = ( str ) => {
    // sentencias
    let strWithOutSpaces = str.trim().replaceAll(/\s/g,'').toLowerCase()
    let strReversed = ''
    console.log(strWithOutSpaces)

    for(i = strWithOutSpaces.length - 1; i >= 0; i--){
        strReversed += strWithOutSpaces[i]
    }

    if(strWithOutSpaces === strReversed){
        return 'SI es un palindromo'
    } else {
        return 'No es un palindromo'
    }
}
/*****************Ejercicio de Marcos ****************** */
// Arrow function
// Pedir al usuario una cadena de texto
// Verificar si esa oración es un palíndromo
const isPalindromo = (str) => {
    //sentencias
    let strWithouthSpaces = str.toLowerCase().replaceAll(" ", "");
    let isThisAPalindrome = true;
    let strSize = strWithouthSpaces.length - 1;
  
    for (let i = strSize; i >= 0; i--) {
      if (strWithouthSpaces[i] !== strWithouthSpaces[strSize - i]) {
        isThisAPalindrome = false;
        break;
      }
    }
  
    return isThisAPalindromo;
  };