
// const numbers = [3, 4];

// // End
// numbers.push(5, 6, 1);

// // Beginning
// numbers.unshift(1, 2);
// console.log(numbers);

/**************************** */ 

// Finding Elements - Primitive Types

// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.indexOf(1, 3));

/**************************** */ 

// Finding Elements - Reference Types
// const courses = [
//   {id: 1, name: 'a'},
//   {id: 2, name: 'b'}
// ];

// const course = courses.find(function(course){
//   return course.id === 2;
// });

// console.log(course);

// Arrow Functions
// const courses = [
//   {id: 1, name: 'a'},
//   {id: 2, name: 'b'}
// ];
  
// const course = courses.find(course => course.id === 1);

// console.log(course);

/**************************** */ 

// Remove Elements
// const numbers = [1, 2, 3, 4];

// //First
// const first = numbers.shift();

// //Middle
// numbers.splice(2, 2);   //--> 1,4 - 2 and 3 will be deleted

// //End
// const last = numbers.pop();


/**************************** */ 
//Emptying an array  
// let numbers = [1, 2, 3, 4];
// let another = numbers;

// Solution 1: - redeclaring the array as empty
// numbers = [];

// Solution 2: - Setting length to zero
// numbers.length = 0;

// Solution 3 - Splice
// numbers.splice(0,numbers.length);

// Solution 4  - Pop
// while(numbers.length > 0)
// numbers.pop();

/**************************** */ 
 // Combining and Slicing Arrays
//  const first = [1,2,3];
//  const second = [4,5,6];

//  const combined = first.concat(second);
//  const slice = combined.slice();
// The Spread Operator
// const combined = [...first,...second];

/**************************** */ 

//Iterating
// const numbers = [1,2,3];

// For...of
// for(let number of numbers)
//     console.log(number);

// For...in
// for(let index in numbers)
//   console.log(numbers[index]);

// forEach Method
// numbers.forEach(function(number){
//   console.log(number);
// });

// forEach - Arrow Function
// numbers.forEach((number,index) => console.log(index, number));


/**************************** */ 
//Join Arrays

// const numbers = [1,2,3];

// const joined = console.log(numbers.join(','));
// console.log(joined);

// const message = "This is my first message";
// const parts = message.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);

/**************************** */ 
//Sorting Arrays

// const numbers = [2, 3, 1];

// console.log(numbers.sort());

// console.log(numbers.reverse());

// const courses = [
//   {id: 1, name:'Node.js'},
//   {id: 2, name:'javaScript'}
// ];

// courses.sort(function(a, b){
  // a < b => -1
  // a > b => 1
  // a === b => 0
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();

//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// });
// console.log(courses);

/**************************** */ 
// Testing the Elements of an Array

// const numbers = [1, -1, 2, 3];

// // every()
// // some()

// const allPositive = numbers.every(function(value){
//   return value >= 0;
// });

// console.log("all positive?:  " +allPositive);

// const atLeastOnePositive = numbers.some
//   (function(value){
//     return value >= 0;
// });

// console.log("At least one positive?: " + atLeastOnePositive);

/**************************** */ 
// Mapping An Array

// const items = numbers
//   .filter(n => n >= 0)
//   .map(n => ({value : n}))
//   .filter(obj => obj.value >1)
//   .map(obj => obj.value);

// console.log(items);

// Reducing An Array

// איפוס הצובר
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// הדרך היעילה
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);


let numbers = [1, -1, 2, 3];
const another = numbers;

numbers.length = 0;
console.log('numbers: ' + numbers);
console.log('another: ' + another);


