function encriptar(){
    var texto = document.getElementById("text-input") .value.toLowerCase();
    var txtCifrado = texto .replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("dibujo").style.display = "none";
    document.getElementById("text-box1").style.display = "none";
    document.getElementById("text2-box1").innerHTML = txtCifrado;
    document.getElementById("button-copy").style.display = "show";
    document.getElementById("button-copy").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("text-input").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("dibujo").style.display = "none";
    document.getElementById("text-box1").style.display = "none";
    document.getElementById("text2-box1").innerHTML = txtCifrado;
    document.getElementById("button-copy").style.display = "show";
    document.getElementById("button-copy").style.display = "inherit";
}

function copiar() {
    var textarea = document.getElementById("text2-box1");
    var contenido = textarea.value;
  
    navigator.clipboard.writeText(contenido)
        .then(function() {
            console.log("Texto copiado al portapapeles: " + contenido);
        })
        .catch(function(error) {
            console.error("Error al copiar el texto: " + error);
        });
    }

