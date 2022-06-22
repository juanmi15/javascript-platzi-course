// ^ = alt + 94

//------------------------------------------------------------------------------------------------
// Código del cuadrado
console.group("Cuadrados");
// Ahora calcularemos el perimetro con 1 parametro para el ladoCuadrado y el ¨4 queda por defecto
function perimetroCuadrado(lado){
    return lado * 4;
}
// Creamos la funcion para calcular el area solo con 1 parametro que afecta a los dos elementos de la formula
function areaCuadrado(lado){
    return lado * lado;
} 
console.groupEnd();



//------------------------------------------------------------------------------------------------
// Código del triángulo 
console.group("Triángulos");
function alturaTriangulo(altura){
    return altura
}
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(altura, base){
    return (altura * base) / 2;
}
console.groupEnd();

//------------------------------------------------------------------------------------------------
// Código del Círculo

console.group("Círculos");
function diametroCirculo(radio){
    return radio * 2;
}
// PI
const PI = Math.PI;
// Circunferencia = Perimetro
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Área
function areaCirculo(radio){
    return PI * (radio * radio)
}
console.groupEnd();
//------------------------------------------------------------------------------------------------


// Para acoplar el html con javascript. Creamos un atributo que se llama onclick y su valor

function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value; 


    const perimetro = perimetroCuadrado(value);
    alert (`el perimetro del cuadrado equivale a ${perimetro}`)
    
}

function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value; 


    const area = areaCuadrado(value);
    alert (`el area del cuadrado equivale a ${area}cm^2`)
}

// document.getElementById(" id del elemento") 