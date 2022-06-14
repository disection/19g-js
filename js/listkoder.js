// función para hacer peticiones
// const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
  
//     const xhttp = new XMLHttpRequest()
//     xhttp.open( 
//         method,  
//         `https://lorekoderjs19-default-rtdb.firebaseio.com${url}`, 
//         true
//     )
//     xhttp.onload = function(data) {
//         if(data.target.status >= 200 && data.target.status <= 399){
//             let response = JSON.parse(data.target.response)
//             callback(response)
//         }
//     }
  
//     if(method === 'GET' || method === 'DELETE'){
//         xhttp.send()
//     } else {
//       xhttp.send( JSON.stringify(obj) )
//     }
    
//   }

// crear conexion
const xhttp = new XMLHttpRequest()
xhttp.open('GET', `https://lorekoderjs19-default-rtdb.firebaseio.com/koders/.json`, true)
xhttp.onload = function(data){
    if(data.target.status >= 200 && data.target.status <= 399){        
        let koders = JSON.parse(data.target.response)
        // formar el layout
        let template = ''
        for(key in koders){
            let {name, username, age, city, history, bootcamp} = koders[key]
            template += `
        <div class="media text-muted pt-3">
            
            <div class=" list-koder media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <div class="d-flex justify-content-between align-items-center w-100">
                <img src="https://eu.ui-avatars.com/api/?name=John+Doe&size=60" alt="user-image" class="mr-2 rounded-circle">
                    <div>
                        <strong class="text-gray-dark">${name}</strong> @${username}
                        <p>${history.slice(0, 20)} ... </p>
                        <span class="d-block">Bootcamp ${bootcamp}</span>
                    </div>
                <a href="/interior.html?koderkey=${key}">Ver más </a>
                </div>          
            </div>
        </div>            
        `
        }

        document.querySelector('.all__koders').innerHTML = template
    }
}
xhttp.send()



