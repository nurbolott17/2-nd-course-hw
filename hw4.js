// Задание 1

let i = 0;
while (i < 2){ console.log('Привет')
    i++;
}

// Задание 2
i = 0;
while(i < 6){console.log(i)
    i++;
}


// Задание 3

i = 7;
while(i < 23){console.log(i)
    i++;
}

// Задание 4
const obj = { 
    "Коля":'200',
    "Вася": '300',
    "Петя": '400'
}

for (let key in obj) {
    console.log(`Зарплата сотрудника  ${key} - ${obj[key ]} $`)
}

// Задание 5
const n = 1000;
let num = 0;
while (n >=50){console.log(n , num)
    n/=2,
    num++;
}

// Задание 6


for (let friday = 3;friday <= 31;friday += 7){
    console.log('Сегодня пятница ' + friday + '-е число. Необходимо подготовить отчет.');
}
;


