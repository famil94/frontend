// task-01

// let users = [ "relief" , "barelief" , "gorelief" ];
// users [1] = "Classified" ;
// console.log(users);

// task-2

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];

// for (let i = 0; i < arr.length; i++) {
// console.log("Episode ${4 + i};, ${arr[i]}");   

// }

// console.log("Episode 4:", arr[0]);
// console.log("Episode 5:", arr[1]);
// console.log("Episode 6:", arr[2]);

// task-3
let salary = [
    [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
    [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
];

let totalSalary = 0 
for (let i = 0; i < salary.length; i++) {
let userSalary = salary[i];

for (let j = 0; j < userSalary.length; j++) {
    totalSalary =totalSalary + userSalary[j]
}
    
}
console.log(totalSalary);

