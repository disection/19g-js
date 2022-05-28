// programación funcional
// si realizar mutaciones
/* paso 1 --------- */
let paso1 = 3
paso1 = paso1 * 3 // en vez de modificar un valor

/* paso 2 -----------*/

let paso2 = paso1 * 2 // creamos uno nuevo a partir de  el original

/**
 * Ejemplo si tenemos un array de números y queremos obtener un array de números con el doble de valor de cada elemento
 */

// const numberValue = [10, 20, 30]
// for (let i = 0; i < numberValue.length; i++){
//     numberValue[i] = numberValue[i] * 2
// } //aquí estamos modificando el valor de nuestro array

// const numberValue = [10, 20, 30]
// const numberDoubleValue = []
// for (let i = 0; i < numberValue.length; i++){
//     numberValue [i] = numberDoubleValue [i] * 2
// } 


/** method .map ------------
* Usamos *map* cuando tenemos un array y queremos obtener un nuevo array de otra cosa
* transforma los elementos de un array 
* uno por uno
* aplicandoles a cada uno una función 
* en base al elemento en cuestión
* y su posición en el array
*/

const numberValue = [3, 10, 20, 50]
const numberDoubleValue = numberValue.map( function ( double ) {
    return numberValue * 2
})

/**  method .filter -----------
* toma cada elemento de un array
* decide si los pasa a un nuevo array
* si el elemento no cumple con cierta condición es descartado
* el resultado es un nuevo array que contienen solo los elementos del array original que cumplen cierta condición
* la función que debemos programar controla la condición debe retornar true o false de acuerdo si queremos quedarnos un elemento o no
* esta función recibe el nombre de predicado
* PREDICADO: función que afirma o niega si un elemento cumple cierta condición

*/


/** method .reduce -----------
 * requiere un array y un valor inicical que debemos darle
 * con cada iteración opera con el valor que va acumulando
 * con cada elemento del array
 * tras operar con todos los elementos obtenemos un único valor como resultado
 * función reductora, encargada de ir actualizando el valor del acumulador con cada elemento del array
 * 
 * 
 */