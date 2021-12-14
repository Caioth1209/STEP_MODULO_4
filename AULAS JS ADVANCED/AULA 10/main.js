var contador = -1;

async function primeiraChamada(){

    if (contador < 2) {
        contador++;
    } else {
        contador = 0;
    }
    
    let frase = await getFrase();

    $("#exercicio").append(frase);
}

async function segundaChamada(){

    if (contador < 2) {
        contador++;
    } else {
        contador = 0;
    }

    let frase = await getFrase();

    $("#exercicio").append(frase);
}

async function terceiraChamada(){
    
    if (contador < 2) {
        contador++;
    } else {
        contador = 0;
    }

    let frase = await getFrase();

    $("#exercicio").append(frase);
}

async function getFrase() {
    let frases = [
        "Primeira promisse",
        "Segunda promisse",
        "Terceira promisse"
    ];

    return frases[contador];
}

primeiraChamada();
segundaChamada();
terceiraChamada();



// async function getCarros(){

//     let carros = [

//         {
//             nome: "Gol",
//             marca: "Volkswagen",
//             ano: 2019,
//             preco: 25000
//         },

//         {
//             nome: "Uno",
//             marca: "Fiat",
//             ano: 2020,
//             preco: 40000
//         },

//         {
//             nome: "Siena",
//             marca: "Fiat",
//             ano: 2017,
//             preco: 30000
//         },

//         {
//             nome: "HB20",
//             marca: "Hyundai",
//             ano: 2021,
//             preco: 90500
//         }
//     ]

//     return carros;
// }

// async function imprimeCarros(){

//     let listaCarros = await getCarros();

//     let texto = "";

//     for(i = 0; i < listaCarros.length; i++){
//         texto += `<tr> 
//                     <td> ${listaCarros[i].nome} </td>
//                     <td> ${listaCarros[i].marca} </td>
//                     <td> ${listaCarros[i].ano} </td>
//                     <td> ${listaCarros[i].preco} </td>
//                     </tr>`;
//     }

//     $("#colunasCarros").html(texto);
// }

// imprimeCarros();

// async function getClientes(){
//     let clientes = [

//         {
//             nome: "Caio Araujo",
//             cpf: "174.851.637-01",
//             email: "caiodaluz@gmail.com",
//             estado: "RJ"
//         },
//         {
//             nome: "Carlino Júnior",
//             cpf: "251.764.412-01",
//             email: "carlinoJunior@gmail.com",
//             estado: "RJ"
//         },
//         {
//             nome: "Juca Bala",
//             cpf: "141.643.291-02",
//             email: "jucabala01@gmail.com",
//             estado: "SP"
//         },
//         {
//             nome: "Claudemiro Filho",
//             cpf: "912.381.245-01",
//             email: "filhoclaudemiro@gmail.com",
//             estado: "AM"
//         }
        
//     ]

//     return clientes;
// }

// async function imprimeClientes(){

//     let listaClientes = await getClientes();

//     let texto = "";

//     for(i = 0; i < listaClientes.length; i++){
//         texto += `<tr> 
//                     <td> ${listaClientes[i].nome} </td>
//                     <td> ${listaClientes[i].cpf} </td>
//                     <td> ${listaClientes[i].email} </td>
//                     <td> ${listaClientes[i].estado} </td>
//                   </tr>`;
//     }

//     $("#colunasClientes").html(texto);
// }

// imprimeClientes();


// async function getPessoas(){
//     // promessa subjetiva
//     let pessoas = [
//         {
//             nome: "Juca Bala",
//             idade: 22
//         },
//         {
//             nome: "Bela Bala",
//             idade: 18
//         }
//     ]

//     return pessoas;
// }

// // promessa subjetiva
// console.log(getPessoas());

// async function chamaFuncoes() {
//     await getPessoas();
// }

// console.log("fim do codigo");