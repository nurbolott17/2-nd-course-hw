// Задание 1

// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];


// console.log(people.sort((a,b) => a.age - b.age));

// Задание 2


function isPositive(num) {
    return num > 0
 }
function isMale(person) {
    return person.gender === "male";
}
function filter(arr,ruleFunction) {
    const a =[];
    for (let i = 0; i < arr.length; i++) {
       if (ruleFunction(arr[i])){
            a.push(arr[i])
       }
    }
    return a
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));


// Критерии оценки
// Подсказка

// Задание 3
// Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».


// Критерии оценки
// Подсказка

// Задание 4
// Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.

// Допишите функцию 
// delayForSecond
//  так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте 
// setTimeout
// .

// function delayForSecond(callback) {
//     // Код писать можно только внутри этой функции
//    callback();
// }

// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// })


// Критерии оценки

// Задание 5
// Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:

// // Функция delayForSecond через 1 секунду пишет в консоль 
// // «Прошла одна секунда», а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) {  cb(); }
//     }, 1000)
// }

// Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log('Привет, ${name}!');
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// delayForSecond(sayHi('Глеб'))