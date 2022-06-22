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
