let a;
a = 10;
alert(a);
a = 20;
alert(a);


let year = 2007;
alert(`${year} год - год выпуска первого Айфона`);


let name = 'Брендон Айком';
alert(`${name} - создатель JS`);


let first = 10;
let second = 2;

let result = first + second;
alert(result)

result = first - second;
alert(result)

result = first * second;
alert(result)

result = first / second;
alert(result)

result = second ** 5;
alert(result);


a = 9;
let b = 2;
result = a % b;
alert(result);


let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);


let age = prompt("Сколько вам лет?");
alert(age);


const user = {
    name: 'Mike',
    age: Number(5),
    isAdmin: Boolean(1)
}

user.cityOfResidence = true;

delete user['age'];
user.age = Number(20);

delete user['cityOfResidence'];

let info = prompt('Какую информацию хотите узнать о пользователе?');
console.log(user[info]);
alert(user[info]);

let nameUser = prompt('Мне бы хотелось познакомиться с вами. Как вас зовут?');
alert(`Привет, ${nameUser}!`);