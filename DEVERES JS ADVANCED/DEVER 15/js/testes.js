QUnit.module("calculos", function() {
    QUnit.test("IMC", function(assert){
        assert.equal(calcularImc(100, 2).replace(",", "."), 25);
    })

    setTimeout(() => {
        $("#qunit").hide();
        $("#qunit-fixture").hide();
   }, 5000);
});