// Exercise switch
/**
 * 
    En el archivo weather.js
    Pedir al usuario que ingrese como esta el clima en su ciudad
    Opciones
        a. Soleado
        b. Lluvioso
        c. Nevando
        d. Nublado
    Pedir la temperatura aproximada en ºC
    Imprimir en consola un descripción acorde al estado del día y la temperatura de ºF
    P.ej: En tu ciudad, el día está “Soleado” con una temperatura de 100ºF
 *
 */

let weather = prompt( '¿Cómo esta el clima en su ciudad? \n a. Soleado \n b. Lluviso \n c. Nevado \n d. Nublado', 'a' ) 
    let temperature = parseInt (prompt( '¿Cuál es la temperatura aproximada en °C? ', 0 ))
    let temperatureF = temperature * 9/5 + 32

    switch (weather.toLowerCase()) {
        case 'a':
            console.log(`En tu ciudad, el día está “Soleado” con una temperatura de ${temperatureF} ºF`)
            break
        case 'b':
            console.log(`En tu ciudad, el día está “Lluvioso” con una temperatura de ${temperatureF} ºF`)
            break
        case 'c':
            console.log(`En tu ciudad, el día está “Nevado” con una temperatura de ${temperatureF} ºF`)
            break
        case 'd':
            console.log(`En tu ciudad, el día está “Nublado” con una temperatura de ${temperatureF} ºF`)
            break
        default:
            console.log(`En tu ciudad hay una temperatura de ${temperatureF} con un clima indefinido`)
            
    }
    



/**
 * Estudiar métodos de String
 * Elergir 1 para poder presentar en clase
 * https://www.programiz.com/javascript/library/string
 * https://www.w3schools.com/jsref/jsref_obj_string.asp
 */