/**
 * 
 * 1. LLenar el endpoint de firebase con multiples posts
 * 2. Crear una funcion que obtenga todos los posts y los imprima en una lista de cards
 * Referencia:
 * https://getbootstrap.com/docs/5.2/components/card/#content
 * 
 * 3. Crear un nuevo documento html con un formulario que tenga lo siguiente
 * 3 campos (titulo, contenido, fecha )
 * 1 botón de enviar
 * Referecia:
 * https://getbootstrap.com/docs/5.2/forms/form-control/
 * 
 *  Acciones
 *  cuando se de click en el boton de enviar, 
 *  crear un nuevo post en firebase
 *  Opcional: Mostrar un alert con el aviso de que ya se creo el post
 * 
 * Referencia: 
 * https://getbootstrap.com/docs/5.2/components/alerts/#content
 */

// Estructura sugerida de archivos
/**
 * createuser.html
 * js/createPost.js
 * css/createpost.css
 */

// Esctructura del post
// { title, body, date }

// url de firebase
//  * urlFirebase /posts/.json

// como obtener los valores de los input, textarea, select ...
// let title = document.querySelector('#elemento').value
// let body = document.querySelector('#elemento').value
// let date = document.querySelector('#elemento').value


// tarea 1
const printAllPosts = (allPosts) => {
  let template = ''
  for( post in allPosts) {
      let { title, body, date } = allPosts[post]
      template += `      
        <div class="col-md-4 ">
            <h2>${title}</h2>
            <p>${body} </p>
            <p>${date}</p>
            <p> <a class="btn btn-primary" href="#" role="button">Seguir leyendo &raquo;</a></p>
        </div>           
      `
  }
  document.querySelector('.all__posts').innerHTML = template

}

ajaxXHR(printAllPosts, '/posts/.json', 'GET')




// explicación de destructuración
let persona = {
  name : 'lorena',
  age : 20,
  bootcamp : 'js'
}
let { name, age, bootcamp } = persona

// destructuración de arreglos
let frutas = [ 'piña', 'melon','sandia', 'otra' ]
let [ fruta1, fruta2, fruta3 ] = frutas

let custom = frutas [2]
console.log(fruta1)
console.log(fruta2)