//Problem 1
let input=[2, 3, 4, 5];
let square=input.map(num => num * num);
console.log(square);

//problem 2
let input=[1, 2, 3, 4, 5, 6];
let evenNumbers=input.filter(num => num % 2 === 0);
console.log(evenNumbers);

//problem 3
 let input = [5, 10, 15, 20];
 let sum = input.reduce((acc, current) => acc + current, 0);
 console.log(sum);

//problem 4
let numbers4 = [1, 2, 3, 4, 5];
let total = numbers4.filter(num => num % 2 === 0).map(num => num * num).reduce((acc, current) => acc + current, 0);
console.log(total);
