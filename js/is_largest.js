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