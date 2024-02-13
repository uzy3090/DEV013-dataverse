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

filtrarGenero.addEventListener("change", function() {
   // console.log(filtrarGenero.value);
    let filtrarAventura = data.filter (genero => genero.facts.generoDePelicula == "Aventura")
    console.log(filtrarAventura);
    const mostrarfiltrado=renderItems(filtrarAventura);
    console.log(mostrarfiltrado)
    root.innerHTML = renderItems(filtrarAventura)
})

filtrarGenero.addEventListener("change", function() {
    // console.log(filtrarGenero.value);
     let filtrarComedia = data.filter (genero => genero.facts.generoDePelicula == "Comedia")
     console.log(filtrarComedia);
     const mostrarfiltrado=renderItems(filtrarComedia);
     console.log(mostrarfiltrado)
     root.innerHTML = renderItems(filtrarComedia)
     })

filtrarGenero.addEventListener("change", function() {
     // console.log(filtrarGenero.value);
     let filtrarFamiliar = data.filter (genero => genero.facts.generoDePelicula == "Familiar")
     console.log(filtrarFamiliar);
     const mostrarfiltrado=renderItems(filtrarFamiliar);
     console.log(mostrarfiltrado)
     root.innerHTML = renderItems(filtrarFamiliar)
    })
filtrarGenero.addEventListener("change", function() {
      // console.log(filtrarGenero.value);
    let filtrarCienciaficción = data.filter (genero => genero.facts.generoDePelicula == "Ciencia ficción")
    console.log(filtrarCienciaficción);
    const mostrarfiltrado=renderItems(filtrarCienciaficción);
    console.log(mostrarfiltrado)
    root.innerHTML = renderItems(filtrarCienciaficción)
    })
filtrarGenero.addEventListener("change", function() {
     // console.log(filtrarGenero.value);
    let filtrarFantasía = data.filter (genero => genero.facts.generoDePelicula == "Fantasía")
    console.log(filtrarFantasía);
    const mostrarfiltrado=renderItems(filtrarFantasía);
    console.log(mostrarfiltrado)
    root.innerHTML = renderItems(filtrarFantasía) 
    })
filtrarGenero.addEventListener("change", function() {
        // console.log(filtrarGenero.value);
    let filtrarDrama = data.filter (genero => genero.facts.generoDePelicula == "Drama")
    console.log(filtrarDrama);
    const mostrarfiltrado=renderItems(filtrarDrama);
    console.log(mostrarfiltrado)
    root.innerHTML = renderItems(filtrarDrama) 
    })

resetButton.addEventListener("click", function() {
    console.log("button");
})


