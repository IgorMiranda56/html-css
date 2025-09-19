//DOM
const url = document.querySelector("#url")
const botao = document.querySelector("#botao")
const qr = document.querySelector("#qrcode")

//Eventos
botao.addEventListener("click", gerar_qrcode)
url.addEventListener("keydown", (event)=>{
    if(event.key == "Enter"){
        gerar_qrcode()
    }
})

//Funções
function gerar_qrcode(){
    texto = url.value
    if(texto){
        qr.innerHTML = ""
        code = new QRCode(qr, {
            text:texto, 
            width:200, 
            height:200, 
            colorDark:"rgba(0, 0, 0, 0)",
            colorLight:"black"
        })

    }else{
        qr.innerHTML = ""
    }
}

