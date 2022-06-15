// Imprimir en layout todos los koders
const printAllKoders = (allKoders) => {
    console.log(allKoders)
    
    let template = ''
    for( koder in allKoders){
        let { name, username, age, city, history, bootcamp } = allKoders[koder]        
        template += `
         <div class="media text-muted pt-3">            
             <div class=" list-koder media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                 <div class="d-flex justify-content-between align-items-center w-100">
                 <div>
                    <img src="https:eu.ui-avatars.com/api/?name=John+Doe&size=60" alt="user-image" class="mr-2 rounded-circle">
                    <strong class="text-gray-dark">${name}</strong> @${username}
                    <p>${history} ... </p>
                    <span class="d-block">Bootcamp ${bootcamp}</span>
                     </div>
                 <a href="/interior.html?koderkey=${koder}">Ver más </a>
               </div>          
            </div>
        </div>            
        `

    }
    console.log(template)
    document.querySelector('.all__koders').innerHTML = template
}
ajaxXHR(printAllKoders, '/koders/.json', 'GET')



