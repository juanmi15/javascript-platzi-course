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
    alert (`el perimetro del cuadrado equivale a ${perimetro.toFixed(1)}`)
    
}

function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value; 


    const area = areaCuadrado(value);
    alert (`el area del cuadrado equivale a ${area.toFixed(1)}cm^2`)
}

// document.getElementById(" id del elemento") 

function calcularPerimetroTriangulo(){
    
    const lado1 = document.getElementById("lado1Triangulo");
    const lado2 = document.getElementById("lado2Triangulo");
    const base =  document.getElementById("baseTriangulo");
    const valueLado1 = parseInt(lado1.value);
    const valueLado2 = parseInt(lado2.value);
    const valueBase2 = parseInt(base.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase2);
    

    alert(perimetro.toFixed(1));

}

function calcularAreaTriangulo(){
    const altura = document.getElementById("alturaTriangulo");
    const base = document.getElementById("baseTriangulo");
    const valueAltura = parseInt(altura.value);
    const valueBase = parseInt(base.value);

    const area2 = areaTriangulo(valueAltura, valueBase);
    alert(area2.toFixed(1));

}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("inputRadio")
    const diametro = radio.value * 2;
    const perimetro = diametro * PI;

    alert(`El perimetro del circulo equivale a ${perimetro.toFixed(2)}`);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputRadio");
    const area = PI * (radio.value * radio.value);

    alert(`El area del circulo equivale a: ${area.toFixed(2)}`);
}

/*# circulo:
    -elementos: pi: 3.1416, d diametro, r radio
    -formula radio = d * 2
    -formula perimetro: P = d * pi
    -formula area: A = pi * r^2 */



