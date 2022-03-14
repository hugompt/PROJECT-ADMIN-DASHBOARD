// Global Variables
let cards = document.querySelectorAll('.card');
let cardText = document.querySelectorAll('.cardText');
let icons = document.querySelectorAll('.icon2');


//Function to change visibility of the card text
//after the user clicked on the eye logo
for (let i = 0; i < cards.length; i++) {
    icons[i].addEventListener("click", function() {
        if(cardText[i].style.visibility == 'hidden'){
            cardText[i].style.visibility = 'visible';
            icons[i].style.backgroundImage = "url('./imgs/visibility_black_24dp.svg')";
        }else{
            cardText[i].style.visibility = 'hidden';
            icons[i].style.backgroundImage = "url('./imgs/visibility_off_black_24dp.svg')";
        }
    });
}