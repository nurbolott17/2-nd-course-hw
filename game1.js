const answer = Math.floor((Math.random() * 100) + 1)
console.log(answer)

function guessTheNumber() {
    userAnswer = parseInt(prompt('Угадай число то 1 до 100'))

    while (userAnswer !== answer) {
        
        if (userAnswer === answer) {
            
            break;
        } else  if (userAnswer > answer){
            userAnswer = parseInt(prompt('Ты не угадал, число корторую я загодал меньше чем  ' + ' ' + userAnswer))
            
        }
        else if (userAnswer < answer){
            userAnswer = parseInt(prompt( 'Ты не угадал, число корторую я загодал ,больше чем '+ ' ' + userAnswer))       
        }
        else {
            userAnswer = parseInt(prompt(userAnswer + '- Это не число , напиши число !!! '))
        }
        } 
        alert('Молодец, ты угадал');   
        console.log('Игра завершена')
    }    

