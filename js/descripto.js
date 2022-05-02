function btnDecripto(){
    let mensagemVazia = document.getElementById("mensagemVazia");
    let copiarBtn = document.getElementById("copiarBtn");
    mensagemVazia.classList.remove("mostraMensagemVazia");
    mensagemVazia.classList.add("mensagemOculta");
    copiarBtn.classList.remove("ocultarBtn");

    let userInput = document.getElementById("textInput").value;
    let decrypted = userInput.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ai/g, 'a').replace(/ufat/g, 'u');
    document.getElementById("mostrarMensagem").innerHTML = decrypted;
}