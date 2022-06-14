
let idPost = window.Location.search.substring(8)

document.addEventListener( 'DOMContentLoaded', () =>{
    // obtener id del post
    let idPost = window.Location.search.substring(8)
    if (idPost !== '') {
        ajaxXHR(loadPost, `/post/${idPost}.json`, 'GET')
    }

} )



// cargar post
const loadPost = (objPost) => {
    
    document.getElementById('title').value = objPost.title
    document.getElementById('body').value = objPost.body
    document.getElementById('datepost').value = objPost.date
}
// mensaje alert
const postActualizado = (response) => {
    console.log(response)
    if(response.title){
        // mostrar mensaje
        document.getElementById( 'wrap__alert' ).classList.remove('d-none')
        // ocultar mensaje
        setTimeout ( () => {
            document.getElementById( 'wrap__alert' ).classList.add('d-none')

        }, 4000)
    }

}

let btnActualizar = document.querySelector('#update__post')

btnActualizar.addEventListener('click', () => {
    let title = document.querySelector('#title').value
    let body = document.querySelector('#body').value
    let datepost = document.querySelector('#datepost').value

    if (title !== '' && body !== ''  && datepost !== '' ) {
        let newPost ={
            title : title,
            body : body,
            date : datepost
        }

        ajaxXHR(postActualizado, `/posts/${idPost}.json`, 'PATCH', newPost)
    } else {
       alert('Algunos datos estan vacios')
    }


})

