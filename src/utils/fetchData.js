//npm install xmlhttprequest --save

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


const fetchData = (url_api) => {
    return new Promise ((resolve, reject) =>{
        const xhhtp = new XMLHttpRequest();
        xhhtp.open('GET', url_api, true);
        xhhtp.onreadystatechange = (() => {
            if(xhhtp.readyState === 4){
            (xhhtp.status === 200)                //lógica de promesas
            ? resolve(JSON.parse(xttp.responseText))
            :reject(new Error('Error ', url_api))
            }
            

            if(xhhtp.readyState === 4){            //lógica de callback (teníamos que borrar a partir de acá)
                if(xhhtp.status === 200){
                    callback(null, JSON.parse(xhhtp.responseText));
                }else{
                    const error = new Error('Error ' + url_api);
                    return callback(error, null)
                }                                   //borramos hasta acá
            }
        });
        xhhtp.send();   
    });
}

module.export = fetchData;