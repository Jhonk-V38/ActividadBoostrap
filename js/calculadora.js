
function limpiar(){
    document.getElementById('formulario').reset();
}

function calcular(){
    let valor1=parseInt( document.getElementById('valor1').value);
    let valor2=parseInt( document.getElementById('valor2').value);
    suma=(valor1 + valor2);
    resta=(valor1-valor2);
    division=(valor1/valor2);
    multiplicacion=(valor1*valor2);
    cuadradoV1=(valor1*valor1);
    cuadradoV2=(valor2*valor2);
    cuboV1=(valor1*valor1*valor1);
    cuboV2=(valor2*valor2*valor2);

document.getElementById('Calcula').innerHTML=
"La suma es: "+ suma + "<br>" +
"La resta es: "+ resta + "<br>" +
"La division es: "+ division + "<br>" +
"La multiplicacion es: "+ multiplicacion + "<br>" +
"El Cuadrado de "+ valor1 + " es: " + cuadradoV1 + "<br>" +
"El Cuadrado de "+ valor2 + " es: " + cuadradoV2 + "<br>" +
"El Cubo de "+ valor1 + " es: " + cuboV1 + "<br>" +
"El Cubo de "+ valor2 + " es: " + cuboV2;
}