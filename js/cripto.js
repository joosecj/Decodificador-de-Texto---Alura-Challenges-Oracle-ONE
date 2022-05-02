function btnCripto(){
    let mensagemVazia = document.getElementById("mensagemVazia");
    let copiarBtn = document.getElementById("copiarBtn");
    mensagemVazia.classList.remove("mostraMensagemVazia");
    mensagemVazia.classList.add("mensagemOculta");
    copiarBtn.classList.remove("ocultarBtn");
      
    let userInput = document.getElementById("textInput").value;
    let encrypted = userInput.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat').replace(/a/g, 'ai');
    document.getElementById("mostrarMensagem").innerHTML = encrypted;
  }
