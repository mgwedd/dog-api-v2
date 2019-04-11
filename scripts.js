'use strict';

function getDogCount() {
    console.log('getDogCount is running');
    $('input[type="submit"]').on('click', event => {
        console.log('form submitted');
        event.preventDefault();
        getAndLogDogs($('input[type="text"]').val());
    });
}

function getAndLogDogs(dogCount) {
    console.log('getAndLogDogs is running');
    fetch(`https://dog.ceo/api/breeds/image/random/${dogCount}`)
    .then(response => response.json())
    .then(responseJson => renderImagesInConsole(responseJson))
    .catch(error => alert('Woof woof. Something isn\'t working right now.'))
}

//  https://ourcodeworld.com/articles/read/457/how-to-display-images-in-the-javascript-console-of-the-browser
function renderImagesInConsole(jsonResponse) {
    console.log('renderImagesInConsole is running');
    const dogImagesArray = JSON.parse(jsonResponse).message;
    dogImagesArray.forEach(dogImage => {
        // console.image('link') comes from this funny little libray: 
        // https://ourcodeworld.com/articles/read/457/how-to-display-images-in-the-javascript-console-of-the-browser
        console.image(dogImagesArray[i]);
    });
}

$(getDogCount());