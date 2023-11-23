function apostar(){
// CALCULAR NUMERO APOSTADO DEL 1 AL 10
var a=Math.round(Math.random()*10);
// Transferencia de var a JS al formulario
document.getElementById("resultado").value=a;
// Trasferencia de datos del formulario al JS
var b=document.getElementById("apostado").value;
// General resultado apuesta
if (a==b){
    document.getElementById("salida").value="GÁNO APUESTA";
}else{
    document.getElementById("salida").value="PERDIÓ APUESTA";
}
}
// FUNCTION CANCELAR
function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
}