function Propina(){
    let mon=document.getElementById("monto").value;
    let pro=document.getElementById("porce").value;
    const Porcentaje1 = 100;
    document.getElementById('Calc').innerHTML=
"la propina es: $"+ ((mon*pro)/Porcentaje1 );
}

window.addEventListener("DOMContentLoaded", () => {
    btnCalcular.addEventListener("click", () => {
        Propina();
    });
});