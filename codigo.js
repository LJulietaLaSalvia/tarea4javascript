function mediodet(){
var distancia= document.getElementById("distancia").value;
if(distancia<=1000){
    alert( "Para ese recorrido le conviene viajar a PIE ");
}
else if(distancia<=10000){
    alert( "Para ese recorrido le conviene viajar en BICICLETA");
}
else if(distancia<=30000){
    alert( "Para ese recorrido le conviene viajar en COLECTIVO");
}
else if(distancia<=100000){
    alert("Para ese recorrido le conviene viajar en auto");
}
else{
    alert("Para ese recorrido le conviene viajar en avión");
}
  

   } 
   function calcularmayor(){
   var n1= document.getElementById("num1").value;
   var n2= document.getElementById("num2").value;
   var n3= document.getElementById("num3").value;
   var n4= document.getElementById("num4").value;
   var n5= document.getElementById("num5").value;


    var nums = [n1,n2,n3,n4,n5];
    var mayor=0;
    for(i=0;i< nums.lenght;i++){
        if(nums)[i]>mayor){
            mayor= nums[i];
        }
    }

}
 
   

 

