
function t() {
  //  const salary=document.forms.imposto.salario.value
  const salario = document.getElementById("salario").value;
  const service = document.getElementById("servico").value;
  const capital = document.getElementById("capital").value;
  const medico = document.getElementById("medico").value;
  const educ = document.getElementById("educ").value;
  
  const result = document.getElementById("result");
  const result1 = document.getElementById("result1");
  const result2 = document.getElementById("result2");
  const result3 = document.getElementById("result3");
  const result4 = document.getElementById("result4");
  const result5 = document.getElementById("result5")
  const result6 = document.getElementById("result6")

let impostoSalario=0;
if(salario <30000){
   impostoSalario=salario;
}else if(salario>30000 && salario <50000){
   impostoSalario=(salario*0.10);
}else{
   impostoSalario=(salario*0.20)
}

let impostoPrestacao=0;
if(service>0){
   impostoPrestacao=service*0.15;
}
let impostoCapital=0;
if(capital >0){
   impostoCapital=capital*0.20;
}
let totalBruto=impostoSalario+impostoCapital+impostoPrestacao;
let dedutivel=parseFloat(educ)+parseFloat(medico);
let maxDedutivel=totalBruto*0.30;
let abater=0;
if(maxDedutivel>dedutivel){
   abater=totalBruto-dedutivel;
}else{
   abater=totalBruto-maxDedutivel;
}



  result.innerHTML = "Imposto salario = R$ "+impostoSalario.toFixed(2);
  result1.innerHTML = "imposto prestacao = R$ "+impostoPrestacao.toFixed(2);
  result3.innerHTML="Gasto de capital = R$ "+impostoCapital.toFixed(2);
  result4.innerHTML="Gastos dedutiveis = R$ "+dedutivel.toFixed(2);
  result2.innerHTML = "Total bruto = R$ "+totalBruto.toFixed(2);
  result5.innerHTML="Maximo dedutivel = R$ "+maxDedutivel.toFixed(2);
  result6.innerHTML="Imposto devido = R$ "+abater.toFixed(2);
}
