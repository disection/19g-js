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

console.log( len );

// String 
let nombre ='Lorena'
let apellido = "Terrazas"
let saludo = new String('hola mundo')
let lorem = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam rem magni accusantium repudiandae!'

console.group( nombre, apellido, saludo)
// propiedades
nombre.length //longitud del string
apellido.toLocaleLowerCase
nombre.toLocaleUpperCase
lorem.includes('amet')
lorem.includes('lorena') 
lorem.trim() //quita los espacios en blanco al inico y al final
lorem.split(' ') // separa una cadena en arreglos partiendo del parametro que se indique en el método


// métodos
