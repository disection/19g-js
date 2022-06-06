// convertir los grados celsius to farentheit
// Imprimir en consola

//console.log('ctof')

let celsius = prompt('Temperatura', 10)
if( celsius === null ) {
    console.log('temperatura mal, vuelve a ingresar')    
} else {
    let f = parseInt(celsius) * 9/5 + 32
    let message = `La temperatura en °F ${f}`
    console.log(message) // mostrar en consola el resultado
}


let gradeCelcius = prompt('temperature', 21)
if ( gradeCelcius !== null ) {
    let gradeF = parseInt(gradeCelcius) * 9/5 + 32
    let message = `La temperatura es de ${gradeF} °F`
    window.alert( message )
} else {
    window.alert( `dato no valido` ) //muestra el mensaje en una ventana de alerta
}