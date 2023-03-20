
function iniciar(){
    let usuario=document.getElementById("user").value;
    let password=document.getElementById("pass").value;

    if (usuario=="Jhonk" && password == "12345"){
        alert("Acceso Coreccto")
        window.location="bienvenida.html"
    }else{
        alert("Datos incorecctos");

    }
}