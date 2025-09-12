//DOM
const distancia = document.querySelector("#distancia")
const consumo = document.querySelector("#consumo")
const preco = document.querySelector("#preco")
const botao = document.querySelector("#botao")
const resultado = document.querySelector("#resultado")

//Funções
function calcular_viagem(){
    dist = Number(distancia.value)
    cons = Number(consumo.value)
    prec = Number(preco.value)
    valorFinal = (dist / cons) * prec
    resultado.textContent = `O valor total da viagem será: R$ ${valorFinal.toFixed(2)}`
}
//Eventos
botao.addEventListener("click", calcular_viagem)