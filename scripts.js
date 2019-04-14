'use strict';

function getDogCount() {
    $('input[type="submit"]').on('click', event => {
        event.preventDefault();
        $('#js-image-results-list').empty();
        getAndLogDogs($('input[type="text"]').val());
    });
}

function getAndLogDogs(dogCount) {
    fetch(`https://dog.ceo/api/breeds/image/random/${dogCount}`)
    .then(response => response.json())
    .then(responseObj => renderImages(responseObj))
    .catch(error => alert(error.message));
}

function renderImages(responseObj) {
    responseObj.message.forEach(dogImage => {
        $('#js-image-results-list').append(`<li><img src="${dogImage}" class="results-img"></li>`);
        $('.results-container').removeClass('hidden');
    });
}

$(getDogCount());