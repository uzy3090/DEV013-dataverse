 export const filtrarPelicula = (data, criterio, valor) => { 
  let filtrar = data.filter(pelicula => pelicula.facts[criterio] == valor);
  return filtrar;
}

export const ordenarPelicula = (data, ordenarPor, valor) => {
  const ordenar = data.toSorted((a,b) => {
    if (valor === "1-10") {
      return a.facts[ordenarPor] - b.facts[ordenarPor];
    }
    else if (valor === "10-1") {
      return b.facts[ordenarPor] - a.facts[ordenarPor];
    }
  })
  return ordenar;
}

export const calcularRating = (data) => {
  // declarar de donde se buscara la info
  const ratings = data.filter(pelicula => pelicula.facts.rating);
  // implementar reduce method, sumando todos los rating
  const result = ratings.reduce(getAverage);
  // dividir el total entre 10
  function getAverage(accumulator, element) {
    const total = accumulator + element;
    const averageTotal = total / element.length
    return averageTotal / 10
  }
  // retornar el resultado
  return result;
}

// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
/*
 export const filterData = (data, filterBy, value) =>
 {

  
  return 'example';
};

export const sortData = (data, sortBy, sortOrder) => {
  return [];
};

export const computeStats = (data) => {

};
*/
