// map modal

var mapOpenButton = document.querySelector('.main-contacts-map');
var mapCloseButton = document.querySelector('.modal_map-close');
var mapModal = document.querySelector('.modal_map');

mapOpenButton.addEventListener('click', function(e){
    e.preventDefault();
    mapModal.classList.add('modal-opened');
})

mapCloseButton.addEventListener('click', function(e){
    e.preventDefault();
    mapModal.classList.remove('modal-opened');
})

// contact us modal

var contactUsOpenButton = document.querySelector('.main-contacts-link');
var contactUsCloseButton = document.querySelector('.modal_contact_us-close');
var contactUsModal = document.querySelector('.modal_contact_us');

contactUsOpenButton.addEventListener('click', function(e){
    e.preventDefault();
    contactUsModal.classList.add('modal-opened');
})

contactUsCloseButton.addEventListener('click', function(e){
    e.preventDefault();
    contactUsModal.classList.remove('modal-opened');
})
