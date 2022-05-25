// object -> array
// let newArray = []
// let newArray = [1,2,4]
// let newArray = ['str', str2]
// let newArray = [ [9,2,3], [1,2]]
// let newArray = [ { a:2 } ]

let newArray = [ 1, 2, 3, 'str', [1,2] ]
// console.log(newArray)
// .length -> tamaño del array -> cantidad de elementos que contiene
// 
// console.log( newArray[0] )
// console.log( newArray[1] )
// console.log( newArray[4][1] )

// for(i = 0; i < newArray.length ; i++ ){
//     console.log(newArray[i])
// }
let arrayToReverse = [1,2,3]
// -> [1,2,3] -> [3,2,1]
let arrReversed = []
for( i = arrayToReverse.length - 1; i >= 0; i-- ){
    arrReversed.push( arrayToReverse[i] )
}

console.log(arrayToReverse, arrReversed)
arrReversed.push(3)
arrReversed.push(3)
arrReversed[0] = 10
console.log(arrReversed)
arrReversed[5] = 100
console.log(arrReversed)
arrReversed[ arrReversed.length ] = 1000
console.log(arrReversed)



// metodos de array
// arr.push(item)
// .push() -> agregar nuevo item al array al final
// .pop() -> Elimina nuevo item al array