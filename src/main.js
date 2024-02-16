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
const statsButton = document.querySelector("[id=estadística]")

sortRating.addEventListener("change", function(event) {
    root.innerHTML = renderItems(ordenarPelicula(data,"rating",event.target.value));
})

filtrarGenero.addEventListener("change", function(event) {
    let filtrar = filtrarPelicula(data,"generoDePelicula",event.target.value)
    root.innerHTML = renderItems(filtrar)

//filtrarGenero.addEventListener("asc").innerHTML= "" + "": const ordenarPelicula.sort ()
})


resetButton.addEventListener("click", function() {
    console.log("button");
})

statsButton.addEventListener("click", function(){
    console.log("statsButton");
})


