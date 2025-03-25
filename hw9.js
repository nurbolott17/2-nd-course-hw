// Задача 1
 
const titleTask1El = document.querySelector('.title-task1');
const btnTask1El = document.querySelector('.btn-task1');
btnTask1El.addEventListener('click', function () { 
    if (titleTask1El.style.display === "none") {
        titleTask1El.style.display = "block";
        btnTask1El.textContent = 'Скрыть';
        } else {
        titleTask1El.style.display = "none";
        btnTask1El.textContent = 'Показать';  
        }
          
});

// Задача 2

const textTask2El = document.querySelector('.text-task2');
const btnTask2El = document.querySelector('.btn-task2');
btnTask2El.addEventListener('click', function () {
    textTask2El.style.color = 'blue';
});

// Задача 3
const titleTask3El = document.querySelector('.title-task3');
const btnTask3El = document.querySelector('.btn-task3');
btnTask3El.addEventListener('click', function () {
    titleTask3El.textContent = 'Привет, мир!.';
});


// Задача 4

const descriptionEl = document.querySelectorAll('.description');
const btnTask4El = document.querySelector('.btn-task4');
btnTask4El.addEventListener('click', function () {
    descriptionEl.forEach(item => {
        item.textContent = 'Измененный текст';
    });
});

// Задача 5

const description5El = document.querySelectorAll('.description5');
const btnTask5El = document.querySelector('.btn-task5');
btnTask5El.addEventListener('click', function () {
    description5El.forEach(i => {
        i.textContent = 'Новый текст';
    });
});

// Задача 6

const btnTask6El = document.querySelector('.btn-task6');
const newContentEl = document.querySelector('.new-content');
btnTask6El.addEventListener('click', function () {
    const newText = document.createElement('p');
    newText.textContent = 'Новый абзац';
    newContentEl.appendChild(newText);
});

// Задача 7
const btnTask7El = document.querySelector('.btn-task7');
btnTask7El.addEventListener('click', function () {
    const description7El = document.querySelector('.description7')
    if (description7El) { 
        description7El.remove();
    }
});
