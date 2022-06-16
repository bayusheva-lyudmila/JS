//1*:
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {Ваши преобразования}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61

console.log('1**')
let age

function CheckAge1(age) {
    let resp, 
        age_2 = 18, 
        age_3 = 60;
if (age < age_2) {
    resp = 'You don`t have access cause your age is ' + age + ' It`s less then 18'
}
else if ((age >= age_2)&(age < age_3)) {
    resp = 'Welcome !'
}
else if (age >= age_3) {
    resp = 'Keep calm and look Culture channel !'
}
else {
    resp = 'Technical work'
}
return resp;
}
console.log('Your age is 17, so ', CheckAge1(17) );
console.log('Your age is 18, so ', CheckAge1(18) );
console.log('Your age is 61, so ', CheckAge1(61) );

//2*:
//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
console.log('2**')
function CheckAge2(age) {
    let resp, 
        age_2 = 18, 
        age_3 = 60,
        age_type=typeof(age);
if ((age_type==='number')&(age>0)) {

    if (age < age_2) {
        resp = 'You don`t have access cause your age is ' + age + ' It`s less then 18'
}
    else if ((age >= age_2)&(age < age_3)) {
        resp = 'Welcome !'
}
    else if (age >= age_3) {
        resp = 'Keep calm and look Culture channel !'
}
    else {
        resp = 'Technical work'
}
}
else resp='Age is not Number or your age is less then 0';
return resp;
}
console.log (CheckAge2('3'));
console.log (CheckAge2(18) );
console.log (CheckAge2(61) );


//3**:
//Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
console.log('3**')
function CheckAge3(age) {
    let resp, 
        age_2 = 18, 
        age_3 = 60;

if ((!isNaN(Number(age)))&(age>0)) {

    if (age < age_2) {
        resp = 'You don`t have access cause your age is ' + age + ' It`s less then 18'
}
    else if ((age >= age_2)&(age < age_3)) {
        resp = 'Welcome !'
}
    else if (age >= age_3) {
        resp = 'Keep calm and look Culture channel !'
}
    else {
        resp = 'Technical work'
}
}
else resp='Age is not a valid value or your age is less then 0';
return resp;
}
console.log (CheckAge3('3') );
console.log (CheckAge3(18) );
console.log (CheckAge3('trt61') );

