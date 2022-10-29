// // Function Declaration
// walk();
// run();

// function walk(){
//   console.log('walk');
// }

// // Annonymous Function Expression
// const run = function() {
//   console.log('run');
// };

// Arguments
// function sum(a, b){
//   return Math.max(a,b); // 1 + undefined = NaN
// }

// console.log(sum(1));

// function sum(){
//   let total = 0;
//   for (let value of arguments)
//     total+= value;
//   return total;
// }

// console.log(sum(1,2,3,4,5,10))

// The Rest Operator

// function calcDiscount(discount, ...prices){
//   const total = prices.reduce((a, b) => a + b);
//   return total * (1 - discount);
// }

// console.log(calcDiscount(0.1, 20, 30));

// // Default Values
// function interest(principal, rate = 3.5, years = 5){
//   return principal * rate / 100 * years;
// }

// console.log((interest(10000)));

// Getters & Setters