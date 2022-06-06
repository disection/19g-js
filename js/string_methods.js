// Metodos de string no alteran el valor inicial del string (solo esta de manera temporal)
// funciones
// str.nombreMetodo(p1,p2,pN)
// .toUpperCase()
// .toLowerCase()
// .substring(start, end) solo se recibe valores positivos
// .includes(searchElement, fromIndex) 
// .slice(start, end) puede aceptar valores positivos o negativos


//-------JavaScript String length-----------//
// sintaxis str.length
// Nos dice el numero de caracteres en un string
// no es un método sino una propiedad

// 'Hola mundo' -> 'Hola'
// '0123456789' -> '0123'

// 'Hola mundo' -> 'Mundo'
// '0123456789' -> '56789'
let str = 'Hola Mundo'
str.slice(-2)


// Ejemplo
// asignamos un valor string a una variable
let sentence = "Hola koders!";

// asignamos a una variable el número de carácteres de  sentence
// length es una propiedad y no un método, te regresa un valor numérico
let len = sentence.length;

console.log( len );

// String 
let nombre ='Lorena'
let apellido = "Terrazas"
let saludo = new String('hola mundo')
let lorem = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam rem magni accusantium repudiandae!'

console.group( nombre, apellido, saludo,
    )
// propiedades
nombre.length //longitud del string
apellido.toLowerCase()
nombre.toUpperCase()
lorem.includes('amet')
lorem.includes('lorena') 
lorem.trim() //quita los espacios en blanco al inico y al final
lorem.split(' ') // separa una cadena en arreglos partiendo del parametro que se indique en el método

console.log( apellido.toLowerCase())

// métodos

// JavaScript String replace()-------------- 
// regresa un nuevo string con la cadena que se especifica
let message = "Hola Koders!"
// remplasa Hola con Adios
let result = message.replace('Hola', 'Adios')
console.log( result)
// Output: 'Adios Koders!'

//JavaScript String indexOf()---------------
// regresa el index de la primera coincidencia
let messageIndexOf = "Hola Koder's"

let resultIndexOf = messageIndexOf.indexOf('de')
console.log( resultIndexOf)
// Output: 7

// JavaScript String lastIndexOf()-----------
// regresa el index de la ultima coincidencia

// defining a string
let strIndexOf = "Programming";
let substr = "g";

// find last occurrence of "g" in str
let resultLastIndexof = strIndexOf.lastIndexOf(substr);

console.log(result);
// Output: 10

// JavaScript String trim()------------------
const messageTrim = "   JAVASCRIPT IS FUN    ";

// remove leading and trailing whitespaces
const newMessage = messageTrim.trim();
console.log(newMessage);
// Output: JAVASCRIPT IS FUN

// JavaScript String charAt()----------------
// string declaration
const string = "Hello World!";

// finding character at index 1
let index1 = string.charAt(1);

console.log("Character at index 1 is " + index1);

// Output:
// Character at index 1 is e

// JavaScript String concat() ----------------
let emptyString = " ";

// joint arguments string
let joinedString = emptyString.concat("JavaScript", " is", " fun.");
console.log(joinedString);

// Output: JavaScript is fun.

// Javascript String includes() ---------------
const messageIncludes = "JavaScript is fun";

// check if message includes the string "Java"
let resultIncludes = messageIncludes.includes("Java");
console.log(resultIncludes);

// Output: true