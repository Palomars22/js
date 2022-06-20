console.log('oi')

function gerarNota(){

    
const genre=document.getElementById('genre').value
const bier=document.getElementById('bier').value
const soda=document.getElementById('soda').value
const skewer=document.getElementById('skewer').value
const idConsumo=document.getElementById('consumo')
const idCouvert=document.getElementById('couvert')
const idIngresso=document.getElementById('ingresso')
let ingresso=0;
let valorBier=5.0;
let valorSoda=3.0;
let valorSkewer=7.0;
let couvert=0;
let totalBebidas=0
let total=0;
const resposta=document.getElementById('resposta')
console.log(genre)
totalBebidas=(parseInt(bier)*valorBier+parseInt(soda)*valorSoda+parseInt(skewer)*valorSkewer)
if(genre == 'm' || genre == 'M'){
ingresso=10.0;
total=totalBebidas+ingresso;
}else if(genre == 'f' || genre == 'F'){
    ingresso=10.0;
    ingresso=8.0;
    total=totalBebidas+ingresso;
}

if(total<=30){
    couvert=4.0;
    total+=couvert;
}else if(total>30){

    couvert=0;
    total=total;
}
console.log("final "+total)
console.log("bebbidas"+totalBebidas)
console.log("ingresso "+ ingresso)
console.log("couve "+couvert)

idIngresso.innerHTML=`R$ ${ingresso.toFixed(2)}`
idCouvert.innerHTML=`R$ ${couvert.toFixed(2)}`
idConsumo.innerHTML=`R$ ${totalBebidas.toFixed(2)}`
resposta.innerHTML=`R$ ${total.toFixed(2)}`;
}
