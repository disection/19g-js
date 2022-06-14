// extraer 
let idKoder = window.location.search.substring(10)
console.log(idKoder)
// pintar la koder en un card
const xhttp = new XMLHttpRequest()
xhttp.open('GET', `https://lorekoderjs19-default-rtdb.firebaseio.com/koders/.json`, true)
xhttp.onload = function(data){
    if(data.target.status >= 200 && data.target.status <= 399){        
        let koders = JSON.parse(data.target.response)
        // formar el layout
        let template = ''
        for(idKoder in koders){
            let {name, username, age, city, history, bootcamp} = koders[idKoder]
            console.log(koders[idKoder])
            template += `            
            <img src="https://eu.ui-avatars.com/api/?name=John+Doe&size=100" alt="user-image" class="mr-2 rounded-circle border border-primary"><h3>${name} <small> @${username}</small></h3>
            <p class="lead">Tengo la edad de ${age} estoy en el bootcamp ${bootcamp}</p>
            <p> ${history}<p>
            
            `
        }

        document.querySelector('.info__koder').innerHTML = template
    }
}
xhttp.send()
