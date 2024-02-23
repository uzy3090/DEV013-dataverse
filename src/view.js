export const renderItems = (data) => {
  let html = '';
  data.forEach(function(pelicula){
    html += `<li class="tarjeta" itemscope itemtype="pelicula">
    <dl> 
    <img src="${pelicula.imageUrl}" alt="Imagen de la película: ${pelicula.name}" />
<<<<<<< HEAD
    <dt class='movieName'><i class="fa-solid fa-film"></i> ${pelicula.name}</dt>
    <dt class='movieShortDes'>${pelicula.shortdescription}</dt> 
    <dt><dd class='movieFacts' itemprop='facts'><i class="fa-solid fa-star"></i>${pelicula.facts.rating}</dd></dt>
=======
    <dt><dd class='movieName'>${pelicula.name}</dd></dt>
    <dt><dd class='movieShortDes'>${pelicula.shortdescription}</dd></dt> 
    <dt><dd class='movieFacts' itemprop='facts' class='emoticonCalendar'>${pelicula.facts.rating}</dd></dt>
>>>>>>> b8e56cf309824425c6b0d6516c1bed1fd6abaab1
    </dl>
    </li>
    `  
  })
  const ul= '<ul>' + html + '</ul>';
  return ul;
};