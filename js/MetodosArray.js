/**
 * Repaso Arrow function
 * -> Parametros
 * -> Invocación de funciones
 */

// declaración de la función PASO 1
const suma = (a, b) =>{
    // sentencias
    let total = a + b
    return total
}

// invocar PASO 2
// suma() -> sin argumentos
// suma (2,3) -> con argumentos
suma (2,3)

const functionNoRetorno = () => {
    console.log('Todo ok')
}

// const finctionNoRetorno = () => console.log('Todo ok') SIN LLAVES

// PARAMETROS por defecto y opcionales estos ultimos siempre se ponen al final
// const suma = ( a = 0, b = 0 ) =>{
//     // sentencias
//     let total = a + b
//     return total
// }

arr.map( callback ) // el callback es una función (acción que se va a realizar por cada elemento)
arr.reduce( callback ) // (callback(acc, cv, index, arr), initialValue)
arr.forEach( callback )
arr.filter( callback )

arr.map( function (cv, index, arr) {} )
arr.map( () => {} )

//-------start example-------------------
// Declarar la función
const doubleNumber = ( numberToIncrement ) => {
    let total = numberToIncrement * 2
    return total
}

let totalFunction = doubleNumber(6) 
console.log( totalFunction )

let multiArray = [100, 1000, 100, 2, 3]

// funciones como argumentos
// [200, 200, 20, 4, 8]
let resultado = multiArray.map( doubleNumber )

let resultFuctionAnomina = multiArray.map(
    // función anonima
    (cv, index, arr)=> {
        let total = cv * 2
        return total
    }
)

// multiArray.map ( cv => cv * 2) -es igual pero cortito-

console.log( resultFunctionAnomima )
//--------end example------------------


/**
 * Repaso métodos de array
 * 
 * 
 */
// metodos de string join, reverse, split, 

['s','t', 't'].filter( (cv)=> cv === 'r' ? cv : null)

//function anonime
let arr = ['s','t', 'r']
let result = arr.filter( (cv, index, arr) => {
    if (cv === 'r'){
        return cv
    }
})

console.log(result)

//-------------start example-----------
const filterPares = () => {
    if ( cv % 2 === 0){
            acc.push(cv)
            return
    }else {
            return acc
    }
}

let reducePares = (arr) => {
    let soloPares = arr.reduce( filterPares , [] )
    return soloPares
}

let arrTodos = [2, 3, 4, 5]
//-------------end example-------------

// .push agregar un elemento al array en la ultima posición
// .pop eliminar el último elemento del array


let itemsArray = [1, 2, "a", "b"];

const filterArrayWithForEach = (array) => {
  let items = [];

  array.forEach((item) => {
    if (typeof item === "string") items.push(item);
  });

  return items;
};

console.log(filterArrayWithForEach(itemsArray));

const filterArrayWithFilter = (array) => {
  return array.filter((currentItem) => {
    if (typeof currentItem === "string") return true;
    else return false;
  });
};

console.log(filterArrayWithFilter(itemsArray));

const filterArrayWithReduce = (array) => {
  return array.reduce((items, currentItem) => {
    if (typeof currentItem === "string") {
      items.push(currentItem);
    }

    return items;
  }, []);
};

console.log(`filterArrayWithReduce: ${filterArrayWithReduce(itemsArray)}`);

