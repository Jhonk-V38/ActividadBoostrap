function cuadrado(){
    let lado=document.getElementById("lado").value;

    console.log("El Area del Cuadrado es: "+ (lado*lado));
    
    document.getElementById('Cuad').innerHTML=
"El area del Cuadrado es: "+ (lado*lado) ;
}

function rectangulo(){
    let base=document.getElementById("baseRect").value;
    let altura=document.getElementById("alturaRect").value;
    
    document.getElementById('Rect').innerHTML=
"El area del Rectangulo es: "+ (base*altura) ;
}

function triangulo(){
    let baseT=document.getElementById("baseTri").value;
    let alturaT=document.getElementById("alturaTri").value;
    
    document.getElementById('Tri').innerHTML=
"El area del Triangulo es: "+ ((baseT*alturaT)/2) ;
}

function circulo(){
    let radi=document.getElementById("radio").value;
   
    document.getElementById('cir').innerHTML=
"El area del Circulo es: "+ (3.1416*radi) ;
}