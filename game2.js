
function examples() {
    let a =  Math.floor((Math.random() * 100));
    let b =  Math.floor((Math.random() * 100) + 1);
    const rand = ['+','-','*','/'];
    let randomSing = Math.floor(Math.random() * rand.length) ;
    function getResult() {
        let result ;
        if (randomSing === 0) {
            result = a + b;
            
        } else if (randomSing === 1){
            result = a - b;
        }
        else if (randomSing === 2){
            result = a * b;
        }
        else  if (randomSing === 3){
            result = Math.floor(a / b);
        }
        return result;
    }
    console.log(getResult())
    let example = `${a} ${rand[randomSing]} ${b}`
    let userAnswer = parseInt(prompt(`Напишите ответ для задачи : ${example}`));
    let result = parseInt(getResult())
    while (userAnswer !== result){
        if (userAnswer === result) {
            break;
         
        }
        else if (!userAnswer){
            alert('Пользователь отменил игру')
            return;
            
        }
        else if (isNaN(userAnswer)) {
            if (true) {
                userAnswer = parseInt(prompt(userAnswer + `Ответ должен быть числом!!!`));
            }
           
        }
        else if (userAnswer !== result){
            userAnswer = parseInt(prompt(userAnswer + ` Не правильно, попробуй еще "${example}"`));
        }
    } 
    alert('Молодец, ты решил правильно');   
    console.log('Игра завершена')
}


    