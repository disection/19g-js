// extraer 
let idKoder = window.location.search.substring(10)
console.log(idKoder)

// pintar la koder en layout
const printKoder = (Koder) => {
    console.log(Koder)
    let {name, username, city, age, history, bootcamp} = Koder
    let template = `
         <div class=" pt-3">            
             <div class=" list-koder media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                 <div class="row">
                    <img src="https:eu.ui-avatars.com/api/?name=John+Doe&size=100" alt="user-image" class="mr-2 rounded-circle">
                     <div class="row">
                       <h3>${name} <small>@${username}</small></h3>                        
                         
                     </div>                     
               </div>
               <div class="row">
               <p class="lead pt-3" >Para presumir</p>
               <p>Hola me gusta que me llamen ${username} tengo ${age} vivi en ${city} 
               </p>
               <p>${history} </p>
               <span class="d-block">Estoy cursando el Bootcamp de ${bootcamp}</span>
               </div>
               
               <a href="/delete.html?koderkey=${Koder}" class="btn link-danger">Borrar</a>
               <a href="/updatekoder.html?koderkey=${idKoder}" class="btn link-primary" >Actualizar</a>    
                   
            </div>
        </div>            
     `
    console.log(template)

    document.querySelector('.info__koder').innerHTML = template
}
ajaxXHR(printKoder, `/koders/${idKoder}.json`, 'GET')
