import { filtrarPelicula } from './dataFunctions.js';
import { ordenarPelicula } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//console.log(example, renderItems(data), data);
let root = document.getElementById("root");
root.innerHTML = renderItems(data)

// acceder a los datos de el HTML
const sortRating = document.querySelector("[data-testid=select-sort]")
const filtrarGenero = document.querySelector("[data-testid=select-filter]")
const resetButton = document.querySelector("[data-testid=button-clear]")

sortRating.addEventListener("change", function(event) {
    console.log(event.target.value); 
    ordenarPelicula(data, "name", event.target.value);
})

filtrarGenero.addEventListener("change", function(event) {
    console.log(event.target.value);
    let filtrar = filtrarPelicula(data,"generoDePelicula",event.target.value)
    root.innerHTML = renderItems(filtrar)
})


resetButton.addEventListener("click", function() {
    console.log("button");
})


