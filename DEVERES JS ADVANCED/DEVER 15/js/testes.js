let pessoa = new Pessoa("Caio", 16, 70, 1.82);

let pessoas = [
    new Pessoa("Luiz", 17, 65, 1.85),
    new Pessoa("Pedro", 19, 60, 1.76)
]

QUnit.module("calculos", function() {

    QUnit.test("IMC", function(assert){
        assert.equal(calcularImc(100, 2).replace(",", "."), 25);
    })

    QUnit.test("Posição da média", function(assert){
        assert.equal(calcularPosicaoMediaIdade(pessoas, pessoa), "Abaixo da Média");
    })
    
    setTimeout(() => {
        $("#qunit").hide();
        $("#qunit-fixture").hide();
   }, 5000);
});
