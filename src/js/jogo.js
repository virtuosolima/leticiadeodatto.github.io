function verificarNumero(){
    let numero= parseInt(document.getElementById("numero").value)
    let numeroSorteado=Math.floor(Math.random()*100)+1
    document.write("O número que você acha que pensei é "+numero +" e o número sorteado foi "+numeroSorteado)
  if (numero==numeroSorteado){
    document.write("<br>"+"você acertou!")
  }
  else{
    document.write("<br>"+"tente novamente!")
  }
  }