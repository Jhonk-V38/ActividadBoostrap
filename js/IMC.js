function CalIMC(){
    let Peso=document.getElementById("peso").value;
    let Altura=document.getElementById("altura").value;

    console.log("Su IMC es de: "+ (Peso/(Altura*Altura)));
    
    document.getElementById('Contenido').innerHTML=

"Su indice de masa corporal es de: "+ (Peso/(Altura*Altura));
}