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
