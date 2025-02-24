// Задание 1

const a = [1, 5, 4, 10, 0, 3];
let i = 0;
while (i < a.length) {
    i++;
    console.log(a[i])
    if (a[i] === 10) {
        break;
    } else {
        
    }   
}

// Задание 2
i = 0
const  b = [1, 5, 4, 10, 0, 3];
while (i < b.length ) {
    i++;
    if (b[i] === 4) {
        console.log(i)
        break;
        
    } else {
        
    }   
}
// Задание 3
const c = [1, 3, 5, 10, 20]
cd = c.join(' ')
console.log(cd)

// Задание 4

const d = [];

for (let i = 0; i < 3; i++){
    const d2 = [];
    for (let i = 0; i < 3;i++){
        d2.push(1);
    }
    b.push(d2)
}
console.log(d)

// Задание 5

const e = [1, 1, 1];
e.push(2,2,2)
console.log(e)

// Задане 6

const f = [9, 8, 7, 'a', 6, 5];
fe = f.sort();
f.pop()
console.log(f)

// Задане 7

const fs = [9, 8, 7, 6, 5];
i = 0;
const userAnswer = +prompt('Угадай число')

if (fs.includes(userAnswer)) {
    alert('Угадал')
} else {
    alert('Не угадал')
}


// Задание 8
let  str = 'abcdef';
str = str.split('');
console.log(str)
str.reverse();
str = str.join('');
console.log(str)

// Задание 9



const arr = [[1, 2, 3],[4, 5, 6]];
const newAr = [];
for (let i = 0;i < arr.length;i++ ){
    newAr.push(...arr[i])
}
console.log(newAr)


// Задание 10

const arrq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arrq.length - 1; i++){
    console.log(i + (i+1))
}

// Задание 11

function qarr(a) {
    return a.map(item => item ** 2);
}
console.log (qarr([1, 4, 3]))


// Задание 12

function functions(a) {
    return a.map(item => item.length);
}
console.log (functions(['sdcxsc', 'xaxa']))




// Задание 13

function negativeNumbers(a) {
    return a.filter(item => item < 2);
}
console.log (negativeNumbers([1, 4, 3, -1 , -2]))

// Задание 14

function randomNam() {
    return Math.floor(Math.random() * 10);
}
const arrw =[]
console.log(arrw)
for (let i = 0; i < 10;i++){
    arrw.push(randomNam())
}
const newNewArr = []
for (let i = 0; i < newNewArr.length; i++) {
    if (arrw[i] % 2 === 0){
        newNewArr.push(arrw[i])
    } 
    
}
console.log (newNewArr) 



// Задание 15

function randomNumb() {
    return Math.floor(Math.random() * 10);
}
const arrwq =[]
console.log(arrwq)
for (let i = 0; i < 10;i++){
    arrwq.push(randomNam())
}
console.log(arrwq.reduce((a,b) => a + b) / arrwq.length);




