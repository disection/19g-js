// codigo 
// Pedir al usuario que ingrese 3 números
// Imprimir en consola el mayor
// opcional usar alert()

let first = parseInt(prompt('Dame un número', 0))
let second = parseInt(prompt('Dame un numero', 0))
let third = parseInt(prompt('Dame un numero', 0))


if(first > second && third ) {
    alert(`El número ${first} es el mayor`) //si es el primero

} else if(second > first && third) {
    alert(`El número ${second} es el mayor`) //si es el segundo

} else if(third > first &&  second) {
    alert(`El número ${third} es el mayor`) // si es el tercero

} else {
    alert('Los 3 números son iguales') //si todos son iguales
}

//Pedir al usuario que ingrese 3 números
// Imprimir en consola el mayor

let one = parseInt( prompt('Escribe un número', 0) ) 
let two = parseInt(prompt('Escribe un segundo número', 0))
let three = parseInt( prompt('Escribe un tercer número', 0))

if ( one > two && one > three ) {
    window.alert(`El número más alto es ${one}`)
} else if ( two > one && two > three ){
    window.alert(`El número más alto es ${two}`)
} else if ( three > one && three > two ) {
    window.alert(`El número más alto es ${three}`)
} else {
    window.alert(`los números son iguales`)
}