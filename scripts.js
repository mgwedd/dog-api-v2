'use strict';

function getDogCount() {
    $('input[type="submit"]').on('click', event => {
        event.preventDefault();
        getAndLogDogs($('input[type="text"]').val());
    });
}

function getAndLogDogs(dogCount) {
    fetch(`https://dog.ceo/api/breeds/image/random/${dogCount}`)
    .then(response => response.json())
    .then(responseObj => renderImagesInConsole(responseObj))
    .catch(error => alert(error.message));
}

function renderImagesInConsole(responseObj) {
    const dogImagesArray = responseObj.message;
    dogImagesArray.forEach(dogImage => {console.image(dogImage)});
}

$(getDogCount());