/*
Aula5: Calculadora Flex
*/

var etanol, gasolina;

function calcular() {
    etanol = parseFloat(frmflex.txtetanol.value.replace(",","."));
    gasolina = parseFloat(frmflex.txtgasolina.value.replace(",","."));

    if(etanol < 0.7 * gasolina) {
        document.getElementById("status").src="etanol.png"
    } else {
        document.getElementById("status").src="gasolina.png"
    }
}

function resetar() {
    document.getElementById("status").src="neutro.png"
}
