const sectionGamesEl = document.querySelector('.section-games')
const btnEl = document.getElementById('btn-game6');
btnEl.addEventListener('click', function() {
    
    btnEl.textContent = 'Сменить цвет фона';
    const r = Math.floor(Math.random() *256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    sectionGamesEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        
}); 



const topBtnEl = document.querySelector('.top__btn');
const blockGamesEl = document.getElementById('blockGames')
const gamesEl = document.getElementById('games')
topBtnEl.addEventListener('click', function (){
    if (blockGamesEl) {
        element = document.getElementById("blockGames");
        element.scrollIntoView(true);
    } else if (gamesEl){
        element = document.getElementById("games") 
        element.scrollIntoView(true);
    }
});
 

   
