export const renderItems = (data) => {
  let html = '';
  data.forEach(function(pelicula){
    html += `<li class="tarjeta" itemscope itemtype="pelicula">
    <dl> 
    <img src="${pelicula.imageUrl}" alt="Imagen de la película: ${pelicula.name}" />
    <dt class='movieName'><i class="fa-solid fa-film"></i> ${pelicula.name}</dt>
    <dt class='movieShortDes'>${pelicula.shortdescription}</dt> 
    <dt><dd class='movieFacts' itemprop='facts'><i class="fa-solid fa-star"></i>${pelicula.facts.rating}</dd></dt>
    </dl>
    </li>
    `  
  })
const ul= '<ul>' + html + '</ul>';
  return ul;
};