/* Name this external file gallery.js */

function upDate(previewPic){
    // Get the image container div by ID
    var imageDiv = document.getElementById("image");

    // 1) Change the background image to the src of the hovered image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // 2) Change the text to the alt text of the preview image
    imageDiv.innerHTML = previewPic.alt;
}

function unDo(){
    // Get the image container div by ID
    var imageDiv = document.getElementById("image");

    // 1) Reset the background image to the original image URL
    imageDiv.style.backgroundImage = "url('')"; // assuming original is no image

    // 2) Reset the text to the original message
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
