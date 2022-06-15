document.addEventListener( 'DOMContentLoaded', () =>{
})

// Se rellenan los campos 
const loadKoder = (objKoder) => {
    console.log(objKoder)
    let {name, username,age, city, history, bootcamp} = objKoder
    document.getElementById('name').value = name
    document.getElementById('username').value = username
    document.getElementById('age').value = age
    document.getElementById('city').value = city
    document.getElementById('history').value = history
    document.getElementById('bootcamp').value = bootcamp
}

//obtener el id 
let idKoder = window.location.search.substring(10)
    console.log(idKoder)
    if (idKoder !== '') {
        ajaxXHR(loadKoder, `/koders/${idKoder}.json`, 'GET')
    } 

// Mensaje exitoso ----------------------------------
const koderUpdate = (response) => {
    console.log(response)   
    
    // if(response.title !== ''){
    //     document.querySelector('#wrap__alert').classList.remove('d-none')       

    //     // timer
    //     setTimeout( () => {
    //         document.querySelector('#wrap__alert').classList.add('d-none')           
    //     }, 4000) 
        
    // }
        
}
    
    // Captar datos del formulario ------------------------------
    let btnUpdate = document.getElementById('updateKoder')
    btnUpdate.addEventListener('click', () => {

        let name = document.getElementById('name').value.trim()
        let username = document.getElementById('username').value.trim()
        let age = document.getElementById('age').value.trim()
        let city = document.getElementById('city').value.trim()
        let history = document.getElementById('history').value.trim()
        let bootcamp = document.getElementById('bootcamp').value.trim()
        console.log(name, username, age, city, history, bootcamp)

        if ( 
            name === '' ||
            username === '' ||
            age === '' ||
            city === '' ||
            history === '' ||
            bootcamp === ''  // duda si se puede sustituir por bootcamp !==  'Selecciona el bootcamp'    
        ) {
            alert('Campos vacios')
        } else {
            // se crea el obj con los datos obtenidos del formulario
            let newKoder = {
                name,
                username,
                age,
                city,
                history,
                bootcamp
            }
            console.log(newKoder)
    
            // se llama la función para poder tener comunicación con servidor
            // se mandan los atributos de la función
            
            ajaxXHR( koderUpdate, `/koders/${idKoder}.json`,'PATCH', newKoder )
        }
    })