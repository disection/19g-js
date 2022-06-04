// DOM

// 1. Seleccionar por ID
document.getElementById('title')
// seleccionar por tagname
document.getElementsByTagName('h1')[0] //te regresa un array
// seleccion por clase
document.getElementsByClassName('title') // te regresa una coleccion de uno o cero elementos

// seleccionar elementos por tag, class, id
// siempre va a seleccionar la primer coincidencia
document.querySelector('.item')
document.querySelector('#title')
document.querySelector('h1')

// seleccionar elementos por tag, class, id
// siempre va a selecciona todas las coincidencias
document.querySelectorAll('.item') // te regresa todos los valores pero en una colección
document.querySelectorAll('#item')
document.querySelectorAll('h1')


let todosLosMenus = document.querySelectorAll( '.item' )
// todosLosMenus.forEach(cv =>{
//     console.log(cv)
// })

//2. Setear/agregar, Obtener, eliminar, comprobar atributos

// Seleccionar un elemento a cambiar
let titulo = document.querySelector( '.title' )
titulo.setAttribute('data-id', 1) // dos parametros

let atributoP = titulo.getAttribute( 'data-id' ) // te regresa el valor del atributo
console.log(atributoP)

// comprobar si existe un atributo
titulo.hasAttribute( 'data-id' )
// -> true / false

// eliminar atributos
// element.removeAttribute(attrName)
titulo.removeAttribute('id')

/**
 * Ejercicio
 * 1. a nuestro elemento <ul> agregar class '.lista' y id'.lista'
 * 2. quitar a todos los elementos de la lista la .item
 * 3. Todos los items, agregar la clase .list__item
 */
 let lista = document.querySelector( 'ul' )
 lista.setAttribute('class', 'lista')
 lista.setAttribute('id', 'list')

 let elementoLista = document.querySelectorAll( 'li' ) //regresa un array 
 //elementoLista.removeAttribute('class') -> NO se aplica porque tiene que iterar cada elemento <li>
 //elementoLista.setAttribute('class', 'list__item') -> No se aplica porque tiene que iterar cada elemento <li>

 const listWrap = document.querySelector('ul')
 const allOptions = document.querySelectorAll('.item')
 // 1
 allOptions.forEach( ( item ) => { item.removeAttribute( 'class' ) } )
 
 // 2
 allOptions.forEach( ( item ) => { item.setAttribute('class', 'list__item') })

 // 3
 allOptions.forEach((item)=> {item.setAtttribute('class', 'list__item')

  })


 /**
  * Crear elementos html
  */

 // CREAR
 /*
    <ul>
        <li>item 1</li>
        <li>item 2</li>
    </ul>
  /*

//document.createElement('elemento')
// se crea de manera temporal
// let listados = document.createElement('ul')
// let item1 = document.createElement('li')

// Pasos a paso



// dinamica
const listaDos = document.createElement('ul')

// let item1 = document.createElement('li')
// item1.textContent = 'item 1'
// listaDos.appendChild(item1)

for( i= 1; i<= 100; i++ ){
    let item = document.createElement('li')
    item.textContent = `item ${i}`
    listaDos.appendChild(item)

}
console.log(listaDos)
let parent = document.querySelector('.content')
parent.appendChild(listaDos)





let reference = document.querySelector( '.subtitle2' )
document.querySelector( '.content' )
    .insertBefore( listaDos, reference )
    */