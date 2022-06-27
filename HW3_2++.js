//Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

/*var fs = require('fs');

fs.readFile('task2.json', function(err, data) {
    if (err) {
        console.error(err);
        return
    }
        console.log(data.toString())
        const content = data.toString();
        
}
);
*/

var fs = require('fs'); 
let data;
try {
    data=fs.readFileSync('task2.json');
}
catch(err) {
    console.error(err)
}
const data_arr=JSON.parse(data.toString());

function unique_name(arr) {
    let result=[], result_name=[];
    for (let str of arr) {
      if (!result_name.includes(str.name)) {
       result.push(str);
       result_name.push(str.name);
      }
    }
    return result;
  }
console.log(unique_name(data_arr))

