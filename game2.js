
function examples() {
    let a =  Math.floor((Math.random() * 100) + 1);
    let b =  Math.floor((Math.random() * 100) + 1);
    const rand = ['+','-','*','/'];
    function getRandomSing(rand) {
        let randomSing = Math.floor(Math.random() * rand.length) ;
        return randomSing; 
    }
    let randomSing = getRandomSing(rand);
    function results() {
        let result = 'Это не числе'
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
    console.log(results())

    let example = `${a} ${rand[randomSing]} ${b}`
    let userAnswer = parseInt(prompt(`Напишите ответ для задачи : ${example}`));
    let result = parseInt(results())
    while ((userAnswer) !== result){
        if (userAnswer === result) {
            break;
        } else if (userAnswer !== result){
            userAnswer = parseInt(prompt(userAnswer + ` Не правильно, попробуй еще "${example}"`));
        }
        else  if (userAnswer === null){
            console.log('Пользователь отменил игру')
            break;
            
        }
        else if (userAnswer !== Number){
            userAnswer = parseInt(prompt(userAnswer + `Ответ должен быть числом!!!`))
        }
    } 
    alert('Молодец, ты решил правильно');   
    console.log('Игра завершена')
}


    