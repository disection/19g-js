/*Pedir al usuario que ingrese como esta el clima en su ciudad
    Opciones
        a. Soleado
        b. Lluvioso
        c. Nevando
        d. Nublado
    Pedir la temperatura aproximada en ºC
    Imprimir en consola un descripción acorde al estado del día y la temperatura de ºF
    P.ej: En tu ciudad, el día está “Soleado” con una temperatura de 100ºF
    */

    // let weather = parseInt( prompt('cómo esta el clima en su ciudad', a) )
    // let celsius = parseInt( prompt('cuál es la temperatura aproximada en ºC', 20) )
    // 
    // if( celsius === null ) {
    //     console.log('temperaura mal, vuelve a ingresar')    
    // } else {
    //     let f = parseInt(celsius) * 9/5 + 32       
    // }
    // switch (weather) {
    //     case a:
    //         console.log(`En tu ciudad, el día está ${weather} con una temperatura de ${f} ºF`)
    //         break
    //     case b: 
    //         console.log(`En tu ciudad, el día está ${weather} con una temperatura de ${f} ºF`)
    //         break
    //     case c: 
    //         console.log(`En tu ciudad, el día está ${weather} con una temperatura de ${f} ºF`)
    //         break
    //     case d: 
    //         console.log(`En tu ciudad, el día está ${weather} con una temperatura de ${f} ºF`)
    //         break
    //     default:
    //         console.log(`En tu ciudad, el día está ${weather} con una temperatura de ${f} ºF`)
    //         break
    // }

    // Corrección de tarea
    let weather = parseInt( prompt('cómo esta el clima en su ciudad: a. Soleado b. Lluvioso c. Nevado d. Nublado', a) )
    let celsius = parseInt( prompt('cuál es la temperatura aproximada en ºC', 20) )
    
    if( celsius === null ) {
        console.log('temperaura mal, vuelve a ingresar')    
    } else {
        let f = parseInt(celsius) * 9/5 + 32       
    }
    switch (weather.toLowerCase()) {
        case a:
            console.log(`En tu ciudad, el día está Soleado con una temperatura de ${f} ºF`)
            break
        case b: 
            console.log(`En tu ciudad, el día está Lluvioso con una temperatura de ${f} ºF`)
            break
        case c: 
            console.log(`En tu ciudad, el día está Nevado con una temperatura de ${f} ºF`)
            break
        case d: 
            console.log(`En tu ciudad, el día está Nublado con una temperatura de ${f} ºF`)
            break
        default:
            console.log(`Por favor ingresa una opción valida`)
            break
    }