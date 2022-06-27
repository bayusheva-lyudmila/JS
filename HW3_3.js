const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 0,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
];

//1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
console.log('***Task 1***');

for (let comp of enterprises) {
       let count=0;
       comp.departments.forEach(dep => {
       count = count + dep.employees_count;
       });
       console.log(comp.name, ' ('+count,' сотрудников)');
       comp.departments.forEach(dep => {
       if (dep.employees_count > 0) { 
        console.log(' - ', dep.name, ' ('+dep.employees_count,' сотрудников)');
       } 
       else {console.log(' - ', dep.name, '(Нет сотрудников)')}
       });
    };

 
//2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
console.log('***Task 2***');

function getEnterpriseName(dep_id){
for (let comp of enterprises) {
  comp.departments.forEach(dep => {
  if ((dep.id == dep_id)||(dep.name == dep_id)){
    console.log('Такой отдел есть в компании ', comp.name)
  }
  });
}
}
getEnterpriseName('Отдел маркетинга');

//3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
console.log('***Task 3***');

function getLastId(){
  let i=0;
  for (let comp of enterprises) {
    if (comp.id>i){i=comp.id};
    comp.departments.forEach(dep => {
    if (dep.id>i){i=dep.id};
    })
  } return i;
  }

function addEnterprise(comp_name){
  let company = {
  id : getLastId()+1,
  name : comp_name,
  departments : [{ id: getLastId()+2, name: 'SomeDepName', employees_count: 10, }],
};
  enterprises.push(company);
  return enterprises;
}
console.log(addEnterprise('SomeCompanyName'))


//4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
console.log('***Task 4***');

function addDepartment(comp_id, new_dep){
  let found = enterprises.find(element => element.id == comp_id);
  found.departments.push({id:getLastId()+1, name: new_dep, employees_count: 20});
  console.log(found);
}
addDepartment(1, 'New department')

//5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
console.log('***Task 5***')

function editEnterprise(comp_edit_id, new_comp_name){
  let found = enterprises.find(element => element.id == comp_edit_id);  
  found.name = new_comp_name;
  console.log(found);
}
editEnterprise(5, 'New Company Name');

//6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
console.log('***Task 6***')

function editDepartment(dep_edit_id, new_dep_name){
  for (let comp of enterprises) {
    comp.departments.forEach(dep => {
     if( dep.id == dep_edit_id ){ 
      dep.name = new_dep_name;
      console.log(dep) 
     }
    })
} 
}
editDepartment(3, 'New Dep Name');


//7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
console.log('***Task 7***');

function deleteEnterprise(comp_del_id){
  for (let i in enterprises) {
    if (enterprises[i].id == comp_del_id) {
      deleted = enterprises.splice(i , 1);
    }  
  }
}
deleteEnterprise(9);
console.log('Предприятие удалено ', deleted);

//8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
console.log('***Task 8***')

function deleteDepartment(dep_del_id){
  for (let comp of enterprises) {
    let i=0;
      for (let dep of comp.departments) {
        if (( dep.employees_count == 0 )&&( dep.id  == dep_del_id)) { 
        let deleted = comp.departments.splice(i , 1);
        console.log('Отдел удален ', deleted);
        }
        i=i+1;       
     }
  }
   
} 

deleteDepartment(3);

//9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
console.log('***Task 9***')

function moveDepartment(dep_from_id, dep_to_id){
  for (let comp of enterprises) {
        let ind_1 = comp.departments.findIndex(index => index.id === dep_from_id);
        let ind_2 = comp.departments.findIndex(index => index.id === dep_to_id);  
        if ((ind_1>=0)&&(ind_2>=0)){
          comp.departments[ind_2].employees_count = comp.departments[ind_2].employees_count + comp.departments[ind_1].employees_count;
          comp.departments[ind_1].employees_count = 0;
          
          console.log(' Сотрудники перенесены из отдела ', comp.departments[ind_1].name, ' в отдел ', comp.departments[ind_2].name, ' предприятия ' , comp.name);
          console.log( 'В отделе ', comp.departments[ind_1].name, ' теперь', comp.departments[ind_1].employees_count, 'сотрудников' );
          console.log( 'В отделе ', comp.departments[ind_2].name, ' теперь', comp.departments[ind_2].employees_count, 'сотрудников' );
      }
  } 
}   
      
moveDepartment(7, 8);