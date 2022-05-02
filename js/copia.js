function copiaTexto() {
    let copiarTexto = document.getElementById("mostrarMensagem");
  
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(copiarTexto.value);
  }