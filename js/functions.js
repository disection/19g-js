// funcion para CRUD para realizar cualquier petición
const ajaxXHR = ( callback, url, method = 'GET', obj = {} ) => {
    // Crear instancia de nuestro objeto
    const xhttp = new XMLHttpRequest()
    // Abrir la conexión con el servidor
    xhttp.open(method, `https://lorekoderjs19-default-rtdb.firebaseio.com${url}`,true)
    // devuelva la información del servidor
    xhttp.onload = function (data) {
        // compruebo el status de la conexión
        if (data.target.status >= 200 && data.target.status <= 399) {
            // creo una variable que contenga el objeto 
            // convertimos de string -> obj
            let response = JSON.parse(data.target.response)
            // pasamos a la función el argumento la respuesta
            callback(response)
        }
    }
    // comprobación del tipo de método que se esta utilizando
    if (method === 'GET' || method === 'DELETE') {
        // no se tienen que mandar argumentos
        xhttp.send()
    } else {
        // se manda la información que se quiere enviar
        // se convierte de obj -> string
        xhttp.send( JSON.stringify(obj) )
    }
}