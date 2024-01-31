export const renderItems = (data) => {
  let html = '';
  data.forEach(function(pelicula){
    html += `<li class="tarjetas" itemscope itemtype="pelicula">
    <dl> 
    <img src="${pelicula.imageUrl}" alt=Imagen de la película: ${pelicula.name} />
    <dt class='movieName'>${pelicula.name}</dt>
    <dt class='movieShortDes'>${pelicula.shortdescription}</dt>
    <dt class='movieDes'>${pelicula.description}</dt>
    <dt class='movieFacts'>${pelicula.facts.rating}</dt>
    </dl>
    </li>`
   // html= '<ul>'+ html +'</ul>'
  })
  console.log(html)
 return html;
};