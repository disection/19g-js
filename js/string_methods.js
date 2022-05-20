// Metodos de string
// funciones
// str.nombreMetodo(p1,p2,pN)
// .toUpperCase()
// .toLowerCase()
// .substring(start, end)
// .slice(start, end)

//-------JavaScript String length-----------//
// sintaxis str.length
// Nos dice el numero de caracteres en un string
// no es un método sino una propiedad

// Ejemplo
// asignamos un valor string a una variable
let sentence = "Hola koders!";

// asignamos a una variable el número de carácteres de  sentence
let len = sentence.length;

console.log(len);

//-----------ejercicio 1-------------//
const message = 'Hola Koders'
/**
 * 'Hola Koders'
 * Cuantas vocales existen
*/
let re = /[aeiou]/gi
let result = message.match(re);

/**
 * 'Hola Koders'
 * Cuantos caracteres son
*/
let numbers = message.length;
console.log(numbers);

/**
 * 'Hola Koders'
 * Cortar el string en 2 strings 
 * -> "hola" "koders"
*/
let cortar = message.split(" ");

/**
 * 'Hola Koders'
 * Reemplazar todas las Vocales por *
 * -> "h*l* k*d*rs"
*/
pattern = /[aeiou]/gi,"*"
let new_message = message.replace(pattern)