

// import animals module
// import { animals } from './animals.js';
import { animals } from './animals.js';

// const animals = gallery;
// const init = function(){
//   console.log(animals);
// }

// window.addEventListener('load', init);

// Create a `outputHTML` variable where you will store the html that will eventually be printed to the page
let outputHTML = '';


// Using `document.querySelector()`, assign the .gallery element to a `gallery` variable.
const gallery = document.querySelector('.gallery');
// Loop through `animals` array using `array.forEach()`. 
animals.forEach(function(item){
  console.log(item);
  outputHTML +=
    `<figure class="card">
        <img src="https://picsum.photos/id/${item.id}/250/250" alt="Lorem Picsum: [animal name]" height=>
        <figcaption><a href="${item.url}">${item.credit}</a></figcaption>
    </figure>`
  // outputHTML += `<img src="https://picsum.photos/id/${item[0]}/250/250" alt="${item[1]}">`;
});
  // For each image ID, 
  
  // 1. create an image card for each image that includes:
  //      - a `<figure class="card">` container
  //      - an `<img>` element including `src`, `alt`, `width` and `height` attributes
  //      - a `<figcaption>` element containing photo credit and link to Unsplash source
  // 2. append the `<figure>` card to the `outputHTML` variable you created earlier
// Using element.innHTML (or other DOM manipulation technique), add the list of figure cards in `outputHTML` to the `gallery` variable you created earlier.
  


gallery.innerHTML = outputHTML;