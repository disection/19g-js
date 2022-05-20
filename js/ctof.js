// convertir los grados celsius to farentheit
// Imprimir en consola

//console.log('ctof')

let celsius = prompt('Temperatura', 10)
if( celsius === null ) {
    console.log('temperaura mal, vuelve a ingresar')    
} else {
    let f = parseInt(celsius) * 9/5 + 32
    let message = `La temperatura en °F ${f}`
    window.alert(message) 
}