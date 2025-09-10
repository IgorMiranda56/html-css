//DOM
const real = document.querySelector("#real")
const botao = document.querySelector("#botao")
const resultado = document.querySelector("#resultado")

//Funções
function calcular_moeda(){
    valor = Number(real.value) /*Muda o valor text para number*/
    dolar = valor / 5.41
    resultado.textContent = `O valor em dolar é US$ ${dolar.toFixed(2)}`
}

//Eventos
botao.addEventListener("click", calcular_moeda)