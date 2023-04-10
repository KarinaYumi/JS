function funcao(){
   var texto =  document.getElementById("texto").value

   if(texto = "" || texto.length <=3) {
    alert("Digite algo com mais de 3 caracteres")
   } else {
    document.getElementById("alerta").innerHTML = "Agora sim!"
   }
}