// Código del cuadrado
// const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
// console.groupEnd();

// Código del triángulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

function alturaTrinagulo(lado1, lado2, lado3) {
  const lados = [lado1, lado2, lado3];
  const unicos = lados.filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });

  if (unicos.length === 2) {
    let lado = lados;

    unicos.forEach((lados) => {
      const indice = lado.indexOf(lados);
      lado = lado.slice(0, indice).concat(lado.slice(indice + 1, lado.length));
    });
    const base = lados.filter(function (x) {
      return x !== lado[0];
    });
    
    altura = Math.sqrt(lado[0] ** 2 - (base[0] / 2) ** 2);
    return [base[0], altura];
  } else {
    alert("No es un triángulo isoseles");
  }
}

function perimetroTriangulo(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Código del círculo
// const raidoCirculo = 4;

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Area
function areaCirculo(radio) {
  return radio * radio * PI;
}

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = Number(input.value);

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = Number(input.value);

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const lado1 = Number(document.getElementById("InputLadoTriangulo1").value);
  const lado2 = Number(document.getElementById("InputLadoTriangulo2").value);
  const lado3 = Number(document.getElementById("InputLadoTriangulo3").value);

  const perimetro = perimetroTriangulo(lado1, lado2, lado3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const lado1 = Number(document.getElementById("InputLadoTriangulo1").value);
  const lado2 = Number(document.getElementById("InputLadoTriangulo2").value);
  const lado3 = Number(document.getElementById("InputLadoTriangulo3").value);
  // const altura = Number(document.getElementById("InputAlturaTriangulo").value);

  const datosArea = alturaTrinagulo(lado1, lado2, lado3);
  console.log(datosArea);
  if (altura !== undefined) {
    const area = areaTriangulo(datosArea[0], datosArea[1]);
    alert(area);
  }
}

function calcularPerimetroCirculo() {
  const radio = Number(document.getElementById("InputRadio").value);

  const perimetro = perimetroCirculo(radio);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const radio = Number(document.getElementById("InputRadio").value);

  const area = areaCirculo(radio);
  alert(area);
}
