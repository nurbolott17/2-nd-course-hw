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


// Задание 3
// Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».
const intervalid = setInterval(() => {
    console.log('hello')
}, 3000);

setTimeout(() => {
    clearInterval(intervalid);
    console.log('Время прошло');

}, 7000);


// Задание 4
// Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.

//
// .

function delayForSecond(callback) {
   setTimeout(callback, 2000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})



// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}


function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// // Код выше менять нельзя


delayForSecond(sayHi('Глеб'))