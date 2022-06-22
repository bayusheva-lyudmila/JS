function CheckAge3(age) {
    let age_2 = 18, 
        age_3 = 60;

if ((!isNaN((age)))&(age>0)) {

    if (age < age_2) {
        alert('You don`t have access cause your age is ' + age + ' It`s less then 18');
}
    else if ((age >= age_2)&(age < age_3)) {
        alert('Welcome !');
}
    else if (age >= age_3) {
        alert('Keep calm and look Culture channel !');
}
    else {
        alert('Technical work');
}
}
else alert('Age is not a valid value or your age is less then 0');
}

let a = prompt('Enter your age');
CheckAge3(a);
