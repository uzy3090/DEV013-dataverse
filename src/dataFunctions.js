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
