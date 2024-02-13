 export const filtrarPelicula = (data, criterio, valor) => { 
  let filtrar = data.filter (pelicula => pelicula.facts[criterio] == valor)
  return filtrar
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
