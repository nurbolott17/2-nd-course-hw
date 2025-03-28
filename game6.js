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
topBtnEl.addEventListener('click', function (){
    const gamesEl = document.getElementById('games')
    const isBlockElHidden =  window.getComputedStyle(document.querySelector(".content")).display === "none";
    
    if (!isBlockElHidden) {
        element = document.getElementById("blockGames");
        element.scrollIntoView(true);
    } else if (gamesEl){
        element = document.getElementById("games") 
        element.scrollIntoView(true);
    }
});
 

   
