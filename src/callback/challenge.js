//npm install xmlhttprequest --save

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'http://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
    let xhhtp = new XMLHttpRequest();
    xhhtp.open('GET', url_api, true);
    xhhtp.onreadystatechange = function(event){
        if(xhhtp.readyState === 4){
            if(xhhtp.status === 200){
                callback(null, JSON.parse(xhhtp.responseText));
            }else{
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhhtp.send();
}

fetchData(API, function(error1, data1) {
    if(error1) return console.log(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if(error2) return console.log(error2);
        fetchData(data2.origin.url, function (error3,data3){
            if(error3) return console.log(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})