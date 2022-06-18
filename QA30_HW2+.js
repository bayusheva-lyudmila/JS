//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
console.log('Задание 1');

let n=2; //основание степени
  for (let i=1; i<=10; i++){
      console.log(' 2 в степени ', i, ' равно ', n ** i);
  }

//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
console.log('Задание 1*');

let y;
function Exp(y){
  let x=2; //основание степени
    for (let i=1; i<=y; i++){
      console.log(' 2 в степени ', i, ' равно ', n ** i);
    }
}
Exp(5);

/*2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)
*/
console.log('Задание 2');

let a=':)', b='';
for (let i=1; i<=5; i++){
    b=b+a;
    console.log(b);
}

/*2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows) */
console.log('Задание 2*');

let c='', z=0;
function Smile_string(c,z){
let b='';
for (let i=1; i<=z; i++){
    b=b+c;
    console.log(b);

}
}
Smile_string(' @*@ ',10)

/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв
Проверки: 'case', 'Case', 'Check-list'*/
console.log('Задание 3*');

let vowel = 'aeiouy', 
    cons = 'bcdfghjklmnpqrstvwxz', 
    word = '';

    function getWordStructure(word){
    let count_vow=0, count_cons=0;
    word = word.toLowerCase();
    for (let l=0; l<=word.length-1; l++) {
         for (let l1=0; l1<=vowel.length-1; l1++){
            if (word.substring(l, l+1)===vowel.substring(l1, l1+1)) {
            count_vow++;
          }
          }
          for (let l2=0; l2<=cons.length-1; l2++){
              if (word.substring(l, l+1)===cons.substring(l2, l2+1)) {
              count_cons++;  
            }
            }
     }
     console.log('Гласных в слове ', count_vow);
     console.log('Согласных в слове ', count_cons);
  }
getWordStructure('Test-Case');

/*4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)
Проверки: 'abba', 'Abba'*/
console.log('Задание 4*');

function Palindrom(pal_world){
  let half1, index1, i=0;
  pal_world=pal_world.toLowerCase();
  pal_world=pal_world.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s]/gi, ''); //Удаляем пробел и спецсимволы
  let length = pal_world.length; 
  //Вычисляем середину слова
  if (length % 2 > 0) { 
      half1 = length/2-0.5;
  } 
  else {
    half1 = length/2;
  }
index1 = half1-1; //смещаем значение на 1, так как индексы в строке идут от 0

for (let l=0; l<=index1; l++){
  if ((pal_world.charAt(l))==pal_world.charAt(length-(l+1))){
    i=i+1;
  }
}
if (i==half1){
  console.log('Palindrom', pal_world);
}
else {console.log('Not palindrom', pal_world)}
}
Palindrom('Abd, edba');
