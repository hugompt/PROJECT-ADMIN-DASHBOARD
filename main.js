// Global Variables
let cards = document.querySelectorAll('.card');
let cardTitle = document.querySelectorAll('.cardTitle');
let cardText = document.querySelectorAll('.cardText');
let iconsEye = document.querySelectorAll('.icon2');
let iconsCopy = document.querySelectorAll('.icon3');

//Function to change visibility of the card text
//after the user clicked on the eye logo
for (let i = 0; i < cards.length; i++) {
    iconsEye[i].addEventListener("click", function() {
        if(cardText[i].style.visibility == 'hidden'){
            cardText[i].style.visibility = 'visible';
            iconsEye[i].style.backgroundImage = "url('./imgs/visibility_black_24dp.svg')";
        }else{
            cardText[i].style.visibility = 'hidden';
            iconsEye[i].style.backgroundImage = "url('./imgs/visibility_off_black_24dp.svg')";
        }
    });
}

//Function to copy text from card
//after user clicked on the clipboard icon
for (let i = 0; i < cards.length; i++) {
    iconsCopy[i].addEventListener("click", function() {
        navigator.clipboard.writeText(cardTitle[i].textContent + cardText[i].textContent);});
}