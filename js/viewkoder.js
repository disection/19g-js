// extraer 
let idKoder = window.location.search.substring(10)
console.log(idKoder)

// pintar la koder en layout
const printKoder = (Koder) => {
    console.log(Koder)
    let {name, username, city, age, history, bootcamp} = Koder
    let template = `
         <div class="media text-muted pt-3">            
             <div class=" list-koder media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                 <div class="d-flex justify-content-between align-items-center w-100">
                    <img src="https:eu.ui-avatars.com/api/?name=John+Doe&size=60" alt="user-image" class="mr-2 rounded-circle">
                     <div>
                         <strong class="text-gray-dark">${name}</strong> @${username}
                         <p>${history} ... </p>
                         <span class="d-block">Bootcamp ${bootcamp}</span>
                     </div>
                     
               </div>
               <a href="/delete.html?koderkey=${Koder}" class="link-danger">Borrar</a> 
                <a href="/updatekoder.html?koderkey=${idKoder}">Actualizar</a>          
            </div>
        </div>            
     `
    console.log(template)

    document.querySelector('.info__koder').innerHTML = template
}
ajaxXHR(printKoder, `/koders/${idKoder}.json`, 'GET')
