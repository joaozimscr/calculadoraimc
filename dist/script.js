let botaoCalcular = document.getElementById('btnCalcular');

function calculandoIMC(){
 let peso = document.getElementById("peso").value;
 let altura = document.getElementById("altura").value/100;
  let resultado = document.getElementById("resultado");
 
  if(altura !== "" && peso !== ""){
    
    let imc = (peso/ (altura * altura)).toFixed(2);
    let mensagem = "";
    
  if(imc< 18.5){
    mensagem = "Abaixo do Peso!"
  }else if(imc < 25){
    mensagem = "Voce está com o peso ideal!"
  }else if(imc < 30){
    mensagem = "Voce está levemente acima do peso!"
  }else if( imc < 35){
    mensagem = "Cuidado! Obesidade grau 1"
  }else if(imc < 40){
    mensagem = "Cuidado! Obesidade grau 2"
  }else {
    mensagem = "Cuidado! Obesidade grau 3"
  }
 resultado.textContent = `Seu imc é ${imc}. ${mensagem}`;

  }else{
     resultado.textContent =  "Preencha todos os campos!!"
  }
  
   let imc = (peso/ (altura * altura)).toFixed(2);
  
    
  
 resultado.textContent = `Seu imc é ${imc}. ${mensagem}`; 
  }

botaoCalcular.addEventListener('click', calculandoIMC);