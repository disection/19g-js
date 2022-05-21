// Ejercicio 1
// investigar while, y do while
/* ---------------- White Loop -------------------- */
//Sintáxis
// while (condition) { //el código se ejecuta mientras la condición se cumpla
//     //bloque de código que se ejecuta
// }

//Example
// let number = parseInt( prompt('qué número te gusta', 8) )
// let i = 1 //la variable se puede volver a ocupara o reasignarle un valor porque esta fuera del ciclo
// while (i <= number) {
//    console.log(`hoy sonrie ${i} while se repite esta condición`)
//    i++
// }

/* ----------------Do  White Loop -------------------- */
//sintáxis
// do {
//     //código que se ejecuta
// } while (condition); // de esta forma almenos una vez existe el ciclo antes de while

//Example
// number = parseInt( prompt('cuál es tu número favorito', 8) )
// do {
//     console.log(` ${i} es tu suerte`)
//     i++;
//   }
//   while (i < 10);

// Utilizar Condicionales, Ciclo for, Metodos de string

/**
 * Ejercicio 2
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 3
 * 3 x 1 = 3
 * 3 x 2 = 6
 * ....
 * 3 x 10 = 30
 */
  let number = parseInt( prompt('cuál tabla de multiplicar quieres resolver', 1) )
  
  for (let i = 1; i <= 10; i++) {
      res = number * i
      console.log(`${number} * ${i} = ${res}`)
  }
 

/**
 * Ejercicio 3
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * p.ej. "Hola mundo"
 * Consonantes -> hlmnd
 * Vocales -> oauo
 */
// let str = parseInt( prompt('qué estas pensando', 'dime') )
// for (let i ; i < str.length; i++) {
//     letters = str[i];
//     if (
//         consonantes == 'a' || 
//         consonantes == 'e' || 
//         consonantes == 'i' || 
//         consonantes == 'o' || 
//         consonantes == 'u'
//     ){
//         console.log(`Consonantes ${letters}`)
//     }
    
// }


/**
 * 
 * Ejercicio 4
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 * p.ej. 12 -> 2,4,6,8,10,12
 * 
 */
// let number = parseInt( prompt('escribe un número del 1 al 100', '1') )
// for ( let i = 1; i <= number; i++ ) {
    
//     console.log(`numeros pares que existen entre 1 y 100 ${i}`)
// }

/**
 * 
 * Ejercicio 5. Opcional
 * Pedir el usuario una palabra
 * Invertir esa palabra e imprimirla en consola
 * p.ej. 'Hola' -> 'aloh'
 *
 */