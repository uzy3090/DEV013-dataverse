//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//console.log(example, renderItems(data), data);
let root = document.getElementById("root");
root.innerHTML = renderItems(data)

// acceder a los datos de el HTML
const sortRating = document.querySelector("[data-testid=select-sort]")
const filtrarGenero = document.querySelector("[data-testid=select-filter]")
const resetButton = document.querySelector("[data-testid=button-clear]")

sortRating.addEventListener("click", function() {
    console.log("rating");
})

filtrarGenero.addEventListener("click", function() {
    console.log("genero");
})

resetButton.addEventListener("click", function() {
    console.log("button");
})