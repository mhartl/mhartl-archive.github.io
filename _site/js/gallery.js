// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  let images = document.querySelector("#gallery-thumbs").
                        querySelectorAll("img");
  let currentDisplayImage = document.querySelector("#gallery-photo").
                                     querySelector("img");

  images.forEach(function(image) {
    image.addEventListener("click", function() {
      // Set clicked image as display image.
      let newImageSrc = image.dataset.largeVersion;
      currentDisplayImage.setAttribute("src", newImageSrc);
    });
  });
}
