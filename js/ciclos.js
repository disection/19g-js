// Ciclos

/*
    for( inicio; fin ; aumento/decremento){
        // sentences
    }

*/ 

for(let i = 1; i<= 10; i++){
    // sentecias
    console.log(`5 x ${i}`)
}
//------------ solución 1
// let str = 'Hola koders' // el string cuenta de 0 ... n en este aso te arroja 11
// let end = str.length - 1 //en length cuenta de 1 ... n en este caso te arroja 12
// for(let i = 0; i<= end; i++){    
//     console.log(str[i])
// }
//------------ solución 2
let str = 'Hola koders' 
let end = str.length // no le restamos nada
for(let i = 0; i< end; i++){ //la equivalencia es solo < menor que
    console.log(str[i])
}


// "Hola Koder"
// Imprimir en consola cada una de las vocales
// ciclos y condicionales
// 
// o
// a
// o
// e

for(let i = 0; i < end; i++){
    let caracter = str[i]
    // console.log(caracter)
    if(
        caracter == 'a' || 
        caracter == 'e' || 
        caracter == 'i' || 
        caracter == 'o' || 
        caracter == 'u'
    ){
        console.log(caracter)
    }
} 


// "Hola Koder"
// Imprimir en consola cada una de las consonantes
// ciclos y condicionales

for(let i = 0; i < end; i++){
    let caracter = str[i]
    // console.log(caracter)
    if(
        caracter != 'a' && 
        caracter != 'e' && 
        caracter != 'i' && 
        caracter != 'o' && 
        caracter != 'u' &&
        caracter != ' '
    ){
        console.log(caracter)
    }
} 

for(let i = 0; i < end; i++){
    let caracter = str[i]
    // console.log(caracter)
    if (!(
        caracter == 'a' || 
        caracter == 'e' || 
        caracter == 'i' || 
        caracter == 'o' || 
        caracter == 'u'
    )
    ){
        console.log(caracter)
    }
} 

