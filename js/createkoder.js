
// Mensaje exitoso ----------------------------------
const koderCreate = (resp) =>{
//console.log(resp.name)

    if(resp.name !== ''){
        const alertPlaceholder = document.getElementById('alertMessage')
        const alerta = (message, type) => {        
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
        }
        // evento que dispara el mensaje---------------------------------------
        const alertOk = document.getElementById('saveKoder')
        if (alertOk) {
        alertOk.addEventListener('click', () => {
            alerta(`Nuevo usuario creado exitosamente con el id ${resp.name}`, 'success')
        })

        // clear form
        document.getElementById('name').value = ''
        document.getElementById('username').value = ''
        document.getElementById('age').value = ''
        document.getElementById('city').value = ''
        document.getElementById('hystory').value = ''
        document.getElementById('bootcamp').value = ''
        
    }
    
    }
}




// Captar datos del formulario ------------------------------
let btnSave = document.getElementById('saveKoder')
btnSave.addEventListener('click', () => {
    let name = document.getElementById('name').value.trim()
    let username = document.getElementById('username').value.trim()
    let age = document.getElementById('age').value.trim()
    let city = document.getElementById('city').value.trim()
    let history = document.getElementById('hystory').value.trim()
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
            name: name,
            username: username,
            age: age,
            city: city,
            history: history,
            bootcamp: bootcamp
        }
        //console.log(newKoder)

        // se llama la función para poder tener comunicación con servidor
        // se mandan los atributos de la función
        ajaxXHR(koderCreate, '/koders/.json','POST', newKoder )
    }
})