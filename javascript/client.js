  // import animals module

  // Create a `outputHTML` variable where you will store the html that will eventually be printed to the page
  
  // Using `document.querySelector()`, assign the .gallery element to a `gallery` variable.
  // Loop through `animals` array using `array.forEach()`. 
  
  // For each image ID, 
    // 1. create an image card for each image that includes:
    //      - a `<figure class="card">` container
    //      - an `<img>` element including `src`, `alt`, `width` and `height` attributes
    //      - a `<figcaption>` element containing photo credit and link to Unsplash source
    // 2. append the `<figure>` card to the `outputHTML` variable you created earlier
    // Using element.innHTML (or other DOM manipulation technique), add the list of figure cards in `outputHTML` to the `gallery` variable you created earlier.
    
import { animals } from './animals.js';
  
let outputHTML = '';
  
const gallery = document.querySelector('.gallery');

animals.forEach(function(item){
  
  console.log(item);
  
  outputHTML +=
    
  `<figure class="card">
        
    <img src="https://picsum.photos/id/${item.id}/${item.width}/${item.height}" alt="${item.title}">

    <figcaption>Photography by: <a href="${item.url}">${item.credit}</a></figcaption>
    
  </figure>`

  });

gallery.innerHTML = outputHTML;