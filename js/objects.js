/**
 * Objets
 * 
 */
// {
//     propiedad : value,
//     key : value,
// }

let koder = {
    name : 'lorena',
    generation : '19',
    bootcamp : 'Js',
    time : ['7-10', '12-4'],
    gender : 'F',
    isActive : false,
    modules : {
        js : true,
        maquetado: true,
        backend : false,
        react :false
    }
}
console.log(koder)

let generation = koder.generation
let backendPassed = koder.modules.backend
//let backendPassed = koder ['modules].backend
//let backendPassed = koder ['modules][backend]

console.log(generation,backendPassed)
//Diferente de null, undefined, NaN => true
if( backendPassed ){
    console.log(`${ koder.name } Si paso el modulo del backend y tiene
        el horario ${koder.time[0]}
    `)
}

koder.isActive ? 'activo' : 'inactivo'

let koderProperties = console.log(`Mi nombre es ${koder.name} estoy haciendo 
    El bootcamp de ${koder.bootcamp} en la generación ${koder.generation} actualmente estoy
    ${koder.isActive ? 'activo' : 'inactivo'}, mi horario de clases es de ${koder.time[0]}
    soy ${koder.gender === 'F' ? 'soy mujer' : 'soy hombre'  }, y actual mente he cursado
    los módulos de ${koder.modules}
`)

