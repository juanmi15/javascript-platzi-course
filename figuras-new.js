
// ^ = alt + 94

//------------------------------------------------------------------------------------------------
// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado mide: ${ladoCuadrado}cm`);

const perimetroCuadrado = 4 * ladoCuadrado;
console.log(`El perimetro del cuadrado mide: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado mide: ${areaCuadrado}cm^2`);

console.groupEnd();

//------------------------------------------------------------------------------------------------
// Código del triángulo 
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm ${ladoTriangulo2}cm ${baseTriangulo}cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triangulo es de: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2  + baseTriangulo;
console.log(`El perimetro triangulo es de: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log(`El area del triangulo es de: ${areaTriangulo}cm^2`);

console.groupEnd();

//------------------------------------------------------------------------------------------------
// Código del Círculo

console.group("Círculos");

//Radio
const radioCirculo = 4 ;
console.log(`El radio del círculo es igual a: ${radioCirculo}cm`);

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del círculo es igual a: ${diametroCirculo}cm`);

// PI
const PI = Math.PI;
console.log(`PI es: ${PI}`);


// Circunferencia = Perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log(`La circunferencia del círculo equivale a: ${perimetroCirculo}cm`);

// Área
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log(`El área del círculo equivale a: ${areaCirculo}cm^2`);

console.groupEnd();
//------------------------------------------------------------------------------------------------
