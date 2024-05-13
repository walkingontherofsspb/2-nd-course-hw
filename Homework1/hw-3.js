let password = "селедка";
let m = prompt("Введите пароль");
if (m === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

let c = Number(prompt(`Введите число`));
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = Number(prompt(`Введите число`));
let e = Number(prompt(`Введите число`));
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let a = 2;
let b = 3;
let sum = a + b;
alert(sum);

let monthNumber = (prompt('Введите номер месяца'));
switch (monthNumber) {
    case '1':
        console.log('Зима');
        break;
    case '2':
        console.log('Зима');
        break;
    case '3':
        console.log('Весна');
        break;
    case '4':
        console.log('Весна');
        break;
    case '5':
        console.log('Весна');
        break;
    case '6':
        console.log('Лето');
        break;
    case '7':
        console.log('Лето');
        break;
    case '8':
        console.log('Лето');
        break;
    case '9':
        console.log('Осень');
        break;
    case '10':
        console.log('Осень');
        break;
    case '11':
        console.log('Осень');
        break;
    case '12':
        console.log('Зима');
        break;
    default:
        console.log('Что-то не то');
}