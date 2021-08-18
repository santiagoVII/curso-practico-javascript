const lista = [5.12, 7.29, 2.16];

function calcularMediaGeometrico(lista) {
  const hayNegativos = lista.some(function (elemento) {
    return elemento < 0;
  });

  if (hayNegativos) {
    return 'No se puede calcular el promedio, todos los datos deben ser positivos';
  } else {
    const productoDatos = lista.reduce(function (acumulador, elemento) {
      return acumulador * elemento;
    })
    const mediaGeometrico = Math.pow(productoDatos, (1/lista.length));
    return mediaGeometrico;
  }
}

console.log(calcularMediaGeometrico(lista));