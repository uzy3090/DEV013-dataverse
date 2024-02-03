export const renderItems = (data) => {
  let html = '';
  const ul = document.createElement ('ul')
  data.forEach(function(pelicula){
    const li = document.createElement ('li')
    html += `
    <dl> 
    <img src="${pelicula.imageUrl}" alt="Imagen de la película: ${pelicula.name}" />
    <dt class='movieName'>${pelicula.name}</dt>
    <dt class='movieShortDes'>${pelicula.shortdescription}</dt>
    <dt class='movieDes'>${pelicula.description}</dt>
    <dt><dd class='movieFacts itemprop='facts'>${pelicula.facts.rating}</dd></dt>
    </dl>
    `
 ul.appendChild (li)
  })
  return html;
};