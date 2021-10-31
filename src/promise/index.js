const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('¡Hey!');
        }else{
            reject('opss no sucedió lo esperado');
        }
    })
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));

//Esta es mejor práctica que la primera ya que muestra de donde viene el error, nos permite hacer un mejor debuggin
const somethingWillHappen2 = () => {
    return new Promise ((resolve,reject)=>{
        if(true) {
            setTimeout(()=>{
                resolve('True');
            }, 2000)
        }else{
            const error = new Error('oops algo pasó');
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//Como correr varias promesas encadenadas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('array of results', response);
})
.catch(err => {
    console.error(err);
})