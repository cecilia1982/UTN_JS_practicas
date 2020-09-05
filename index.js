/*
Hola, soy MARIA CECILIA ERCOLE

ESTE ES MI TRABAJO OPCIONAL 1
ESPERO LES GUSTE!

*/

function seleccionarValor() {
  let valueSeguro = document.getElementById("valueSeguro");
  let valor = valueSeguro.value;

  document.getElementById(
    "resultadoValueSeguro"
  ).innerText = `Tu seguro vale  ${valor}`;
}
