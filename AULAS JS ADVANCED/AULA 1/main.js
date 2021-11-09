let array = ['Juca', 'Ana', 'Zeca'];

let texto = "Uma frase qualquer.";

let pessoa = {
    nome: "Bill Gates",
    email: "bill@microsoft.com"
};

sessionStorage.setItem("frase", texto);
// Armazena até o fechamento do navegador

localStorage.setItem("array", JSON.stringify(array));
// Armazena até limpar o histórico do navegador
// JSON -> conversor de objetos