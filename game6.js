function chargeColorBackground() {
    const sectionGamesEl = document.querySelector('.section-games')
    const btnEl = document.getElementById('btn-game6');
    btnEl.addEventListener('click', function() {
        btnEl.textContent = 'Сменить цвет фона';
        const r = Math.floor(Math.random() *256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        sectionGamesEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        
    }); 
    
    
}