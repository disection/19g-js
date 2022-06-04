/**
 * Ejercicio 1
 * <ul id="menu" class="menu">
        <li class="item__menu">Home</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */
 const tarea1 = () =>{
     const body = document.querySelector('body')
     const lista = document.createElement('ul')
     lista.setAttribute('id', 'list')
     // setear clases
     // Mediante atributos
     lista.setAttribute( 'class', 'lista lista2')
     // mediante metodos add/remove
     lista.classList.add('lista 3')
     lista.classList.remove('lista2')


     let menus = ['Home','Products', 'About Us']

     let listItems = ''

     menus.forEach( (menu) => {
         listItems += `<li>${menu}</li>`
        //  let li = document.createElement('li')
        //  li.textContent = menu
        //  lista.appendChild(li)
     })

 }
    element.innertext()
    element.inner

    document.querySelector('body').appendChild(lista)

    document.querySelector('.ejercicioUno')

/**
 * Dado un arreglo de koders
 * 1. Generar una lista con la clase koders
 * 2. Agregar a cada koder en esa lista
 * 3. A todos los koders agregarles la clase 'item koder'
 */

let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'], 
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['Node'], 
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'], 
    }
]

/**
 * Ejercicio 3
 * Del mismo arreglo de koders
 * 1. Generar una tabla de koders con las columnas
 *   - Nombre completo
 *   - Edad
 *   - Generación 
 * 
 *   Opcional -Modulos cursados
 * 
 * Referencia: https://slack-files.com/TCRFJBKB6-F03J4CBCBA7-8b1c39e7bc
 * 
 */



const tarea3 = () => {
    console.log('Ejecutando tarea 3')
    let tbody = document.querySelector('tbody')
    koders.forEach( (koder, index, arr) => {
    
        let tr = document.createElement('tr')
        let tdName = document.createElement('td')
        tdName.textContent = koder.name
        tr.appendChild(tdName)
        let tdAge = document.createElement('td')
        tdAge.textContent = koder.age
        tr.appendChild(tdAge)
        let tdGen = document.createElement('td')
        tdGen.textContent = koder.generation
        tr.appendChild(tdGen)
        console.log(tr)
        tbody.appendChild(tr)
        
    })
}