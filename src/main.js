import { filtrarPelicula } from './dataFunctions.js';
import { ordenarPelicula } from './dataFunctions.js';
import { calcularRating } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//console.log(example, renderItems(data), data);
let root = document.getElementById("root");
root.innerHTML = renderItems(data);
let valoractual= [...data]
// acceder a los datos de el HTML
const sortRating = document.querySelector("[data-testid=select-sort]");
const filtrarGenero = document.querySelector("[data-testid=select-filter]");
const resetButton = document.querySelector("[data-testid=button-clear]");
const statsButton = document.querySelector("[id=estadística]");

sortRating.addEventListener("change", function(event) {
    root.innerHTML = renderItems(ordenarPelicula(valoractual,"rating",event.target.value));
})

filtrarGenero.addEventListener("change", function(event) {
    let filtrar = filtrarPelicula(data,"generoDePelicula",event.target.value);
    valoractual = [...filtrar]
    root.innerHTML = renderItems(filtrar);

})


 
resetButton.addEventListener("click", function() {
    filtrarGenero.selectedIndex = 0;
    sortRating.selectedIndex = 0;
    root.innerHTML = renderItems(data);
})

statsButton.addEventListener("click", function(){
    alert("El promedio de rating de las peliculas de Pixar es: "+ calcularRating(data));
})


