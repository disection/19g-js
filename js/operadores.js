/* Operadores */
/* Aritméticos  + - * / % () * /

let a = 5 + ( 5 - 10 ) * 30
let modulo = 5 % 2 //devuelve el residuo de una división

console.log( a )
console.log( modulo )

/* Operadores relacionales 
>, <, >=, <=, ==, ===, !=, !== */


console.log( 8 > 9 )
console.log( 9 > 8 )
console.log( 8 >= 9 )
console.log( 7 < 7 )
console.log( 7 >= 7 ) // se incluye en la comparaión del valor que estas dando

/* Operadores de comparación el resultado siempre va a ser booleano true - false
= -> es asignación de variable
== -> comparación solamente los valores
=== -> estrictamente igual comparación de tipo de datos y de valores BUENA PRÁCTICA
!== -> estrictamente diferente comparación de tipo de datos y de valores BUENA PRÁCTICA
!= -> comparación solamente los valores

*/
console.log( 7 == 7)
console.log( '7' == 7 )
console.log( 7 === 7 ) //manera correcta

/* operadores de incremento y decremeto */
let i = 1
i = i + 2

j += 3 
k -= 3
l *= 3
m /= 3

// operador unario
i = i +1
i++ // suma de uno en uno BUENAS PRACTICAS
i--
//--------------------------------------------------
++i // solo funciona con incrimentos de uno en uno
--i

/* Operadores lógicos 
!  Not -> Niega lo que es verdadero lo vuelve falso y viceversa
|| Or -> Cuando tengo dos o más condiciones conque una se cumpla es decir sea verdadera el OR se valide
&& and -> Cuando tengo 2 o más condiciones todas tienen que cumplirse es decir ser verdaderas para que AND se valide
*/
console.log ( !true )
console.log ( !false )
console.log ((9 === 9) || ( 9 === 9 ))
console.log ((9 === 9) && ( '9' === 9 ))
console.log ((9 === 9) && ( '9' === '9' ))