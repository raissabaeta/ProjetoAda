var nome = prompt("Olá, qual seu nome?");
alert(nome +"," + " seja bem-vinde!");



document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && 
     document.getElementById("email").value != "" && 
     document.getElementById("telefone").value != ""){
  alert("Prontinho! Você receberá as novidades por e-mail")
}else {
  alert("Por favor, preencha o nome, o e-mail e o telefone")
}
}
