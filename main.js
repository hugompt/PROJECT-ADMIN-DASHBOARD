// Global Variables
let cards = document.querySelectorAll('.card');
let cardTitle = document.querySelectorAll('.cardTitle');
let cardText = document.querySelectorAll('.cardText');
let iconsEye = document.querySelectorAll('.icon2');
let iconsCopy = document.querySelectorAll('.icon3');
let tooltipText = document.querySelectorAll('.tooltipClicktext');
let tooltipEyeText = document.querySelectorAll('.tt2');

//Function to change visibility of the card text
//after the user clicked on the eye logo
for (let i = 0; i < cards.length; i++) {
    iconsEye[i].addEventListener("click", function() {
        if(cardText[i].style.visibility == 'hidden'){
            cardText[i].style.visibility = 'visible';
            iconsEye[i].style.backgroundImage = "url('./imgs/visibility_black_24dp.svg')";
            tooltipEyeText[i].textContent = "Click me to hide the text on the card"
        }else{
            cardText[i].style.visibility = 'hidden';
            iconsEye[i].style.backgroundImage = "url('./imgs/visibility_off_black_24dp.svg')";
            tooltipEyeText[i].textContent = "Click me to show the text on the card"
        }
    });
}

//Function to copy text from card
//after user clicked on the clipboard icon
//and also tooltip for visual confirmation
for (let i = 0; i < cards.length; i++) {
    iconsCopy[i].addEventListener("click", function() {
        tooltipText[i].style.visibility = 'visible';
        tooltipText[i].style.opacity = 1;
        navigator.clipboard.writeText((cardTitle[i].textContent + cardText[i].textContent).replace(/[ \t]{1,}/g, ' '));});
        iconsCopy[i].addEventListener('mouseleave',function(){
            tooltipText[i].style.visibility = 'hidden';
            tooltipText[i].style.opacity = 0;
        })
    }