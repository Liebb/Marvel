window.addEventListener('load', () => {
   homePage();
})
function homePage() {
    getCharacters();
}

const htmlElement = document.querySelector('html');
const toggleButton = document.querySelectorAll('.toggle');
toggleButton.forEach( item => {
    item.addEventListener('click', () => {
        htmlElement.classList.toggle( 'dark' );
    });
});