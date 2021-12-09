// /* sintaxe

// new Promise((resolve:function, reject:function) => void)
//     resolve -> função caso retorne a promisse
//     reject -> função caso dê erro no retorno
// */

// var contador = (tempo) => {
//     return new Promise((resolve,reject) =>{
//         setTimeout(resolve, tempo);
//     });
// }

// contador(3000).then(function() {
//     console.log("3 segundos se passaram.");
// });

// // pode usar then, quando da certo
// // e catch, quando da erro

// // Exemplo de Promise nao cumprida

// function getAll(){
//     return new Promise((resolve,reject) => {
//         resolve([1,2,3,4]);
//         reject(new Error("Usuários não encontrados"));
//     });
// }


// // getAll().catch(err => console.log(err));
// // causa erro na promise do getAll

// function getById(id) {
//     return new Promise((resolve, reject) => {
//         resolve({id, nome: "Juca Bala"});
//         reject(new Error("Vai toma no cu seu armando"));
//     })
// }

// getAll()
// .then(id => { // id é o resultado do getAll
//     console.log("O id tem o valor: " + id);

//     id.forEach(element => {
//         console.log("Valor do id a cada volta: " + element);
//     });
//                     // usuario é o resultado do getById
//     getById(id[0]).then(usuario => {console.log(usuario)});
// })

// getAll()
// .then(id => getById(id[1]))
// .then(usuario => console.log(usuario));


/////////////////////////////////////////

// function getAllSemPromise(){
//     return ([1,2,3,4]);
// }

// function getByIdSemPromise(id){
//     return {id, nome: "Juca Bala"};
// }

// let ids = getAllSemPromise();

// let usuario = getByIdSemPromise(ids);

// console.log(usuario);


// Melhorando o quadro de cima


function getAll2(){
    return new Promise((resolve,reject) => {
        resolve([
            {id: 1, nome: "Juca Bala"},
            {id: 2, nome: "Bela Bala"},
            {id: 3, nome: "Tião Bala"},
            {id: 4, nome: "Ana Bala"},
            {id: 5, nome: "Zeca Bala"}
        ]);
        reject(new Error("Usuários não encontrados"));
    });
}

function getById2(id, lista) {

    let user = "";
    lista.forEach(usuario => {
        if (usuario.id == id) {
            user = usuario;
        }
    })

    return new Promise((resolve, reject) => {
        resolve(user);
        reject(new Error("Valeu, Seu Armando!"));
    })
}

getAll2()
        .then(result => {
            getById2(1,result).then(user => {
                console.log(user);
            })
        })