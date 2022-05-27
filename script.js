const inputText = document.querySelector(".input-text");
const mensaje = document.querySelector("#output-text");

function btnencriptar(){
    const textoEncriptado = encriptar(inputText.value);
    mensaje.value = textoEncriptado;
}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}


function btndesencriptar(){
    const textoEncriptado = desencriptar(inputText.value);
    mensaje.value = textoEncriptado;
}

function desencriptar(StringParaEncriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}

var x = document.getElementById("fase2").style.display = "none"
function desaparecer() {
    if(inputText.value.length > 0){
        document.getElementById("fase1").style.display = "none"
        document.getElementById("fase2").style.display = "block"
    }

    }
  
function copyToClipBoard() {

    var content = document.getElementById('output-text');
        
    content.select();
    document.execCommand('copy');
    
    alert("Copied!");
}