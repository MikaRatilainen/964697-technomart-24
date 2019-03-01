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

// purches modal

var buyItemOpenButtons = document.querySelectorAll('.item_card-button-buy');
var buyItemCloseButton = document.querySelector('.modal_item_purches-close');
var buyItemReturnButton = document.querySelector('.modal_item_purches-return');
var buyItemModal = document.querySelector('.modal_item_purches');

buyItemOpenButtons.forEach(function(button){
    button.addEventListener('click', function(e){
        e.preventDefault();
        buyItemModal.classList.add('modal-opened');
    });
})

buyItemCloseButton.addEventListener('click', function(e){
    e.preventDefault();
    buyItemModal.classList.remove('modal-opened');
})

buyItemReturnButton.addEventListener('click', function(e){
    e.preventDefault();
    buyItemModal.classList.remove('modal-opened');
})

// contact us modal

var contactUsOpenButton = document.querySelector('.main-contacts-link');
var contactUsCloseButton = document.querySelector('.modal_contact_us-close');
var contactUsModal = document.querySelector('.modal_contact_us');

var form = document.querySelector('.modal_contact_us-form');
var userName = form.querySelector('.modal_contact_us-form-name input');
var email = form.querySelector('.modal_contact_us-form-email input');
var text = form.querySelector('.modal_contact_us-form-text textarea');

hasLocalStorageName = true;
hasLocalStorageEmail = true;
storageName = '';
storageEmail = '';

try {
    storageName = localStorage.getItem('userName');
    storageEmail = localStorage.getItem('email');
} catch {
    isLocalStorageSupports = false;
}

contactUsOpenButton.addEventListener('click', function(e){
    e.preventDefault();
    contactUsModal.classList.add('modal-contact_us-opened');

    if (storageName && storageEmail) {
        name.value = storageName;
        email.value = storageEmail
        text.focus();
    } else {
        userName.focus();
    }

})

contactUsCloseButton.addEventListener('click', function(e){
    e.preventDefault();
    contactUsModal.classList.remove('modal-contact_us-opened');
})

form.addEventListener('submit', function(e) {
    if (!userName.value || !email.value || !text.value) {
        e.preventDefault();
        console.log('Заполните все поля формы')
    } else {
        if (isLocalStorageSupports) {
            localStorage.setItem('userName', userName.value);
            localStorage.setItem('email', email.value);
        }
    }
})

window.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        e.preventDefault();
        if (contactUsModal.classList.contains('modal-contact_us-opened')) {
            contactUsModal.classList.remove('modal-contact_us-opened');
        }
    }
})
