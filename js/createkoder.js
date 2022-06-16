
// Mensaje exitoso ----------------------------------
const koderCreate = (resp) =>{
//console.log(resp.name)

    if(resp.name !== ''){
        document.querySelector('#wrap__alert').classList.remove('d-none')
        document.querySelector('#id__koder').innerHTML = resp.name

        // timer
        setTimeout( () => {
            document.querySelector('#wrap__alert').classList.add('d-none')
            
        }, 4000)

        // clear form
        document.getElementById('name').value = ''
        document.getElementById('username').value = ''
        document.getElementById('age').value = ''
        document.getElementById('city').value = ''
        document.getElementById('history').value = ''
        document.getElementById('bootcamp').value = ''

        

        // timer
        setTimeout( () => {
            document.querySelector('#wrap__alert').classList.add('d-none')
            window.location.href = `/interior.html?koderkey=${resp.name}`        
        }, 4000) 
        //
        
    }
    
    }

// Captar datos del formulario ------------------------------
let btnSave = document.getElementById('saveKoder')
btnSave.addEventListener('click', () => {
    let name = document.getElementById('name').value.trim()
    let username = document.getElementById('username').value.trim()
    let age = document.getElementById('age').value.trim()
    let city = document.getElementById('city').value.trim()
    let history = document.getElementById('history').value.trim()
    let bootcamp = document.getElementById('bootcamp').value.trim()

    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let lastModified = date
    //console.log(name, username, age, city, history, bootcamp)
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
            bootcamp: bootcamp,
            lastModified: lastModified
        }
        //console.log(newKoder)

        // se llama la función para poder tener comunicación con servidor
        // se mandan los atributos de la función
        ajaxXHR(koderCreate, '/koders/.json','POST', newKoder )
    }
})