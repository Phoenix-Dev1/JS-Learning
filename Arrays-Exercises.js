/*****************************/

// Exercise 1 - arrayFromRange

// const numbers = arrayFromRange(0, 3);

// function arrayFromRange(min, max){
//   const output = [];
//   for (let i = min; i <= max ; i++)
//     output.push(i);
//   return output;
// }

/*****************************/

// Exercise 2 - Implementation Of The Function: Includes

// const numbers = [1, 2, 3, 4]

// console.log(includes(numbers,1));


// function includes(array, searchElement){
//   for(let element of array)
//     if (element === searchElement)
//       return true;
//   return false;
// }

/*****************************/
// Exercise 3 - Except
// const numbers = [1, 2, 3, 4, 1, 1, 1];

// const output = except(numbers, [1]);

// console.log(output);

// function except(array, excluded){
//   const output = [];
//   for(let element of array)
//     if(!excluded.includes(element))
//       output.push(element);
//   return output;
// }

/*****************************/

// Exercise 4- Moving an Element
// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 0, 1);

// console.log(output);

// function move(array, index, offset){
//   const position = index + offset;
//   if (position >= array.length || position < 0){
//     return console.error('Invalid Offset');
//   }

//   const output = [...array];
//   const element = output.splice(index,1)[0];
//   output.splice(position, 0, element);
//   return output;
// }

//  Exercise 5- Count Occurrences
// const numbers = [1, 2, 3, 4];
// const count = countOccurrences2(numbers,2);

// console.log(count);

// function countOccurrences(array, searchElement){
//   let count = 0;
//   for (let element of array)
//     if (element === searchElement)
//       count++;
//   return count;
// }

// function countOccurrences2(array, searchElement){
//   return array.reduce((accumulator, current) => {
//     const occurrence = (current === searchElement) ? 1 : 0;
//     //console.log(accumulator, current, searchElement)
//     return accumulator + occurrence;
//   },0);
// }

// Exercise 6- Get Max
// const numbers = [1, 2, 3, 4];

// const max = getMax2(numbers);

// console.log(max);

// function getMax(array){
//   if (array.length === 0) 
//     return undefined;

//   let max = array[0];
//   for(let i = 1; i < array.length ; i++)
//     if (array[i] > max)
//       max = array[i];
//   return max;
// }

// function getMax2(array){
//   if (array.length === 0) 
//     return undefined;

//   return array.reduce((a, b) => (a > b) ? a : b);
// }

// Exercise 7- Movies
// All the movies in 2018 with rating >= 4
// Sort them by their rating
// Descending Order
// PICK their title

// const movies = [
//   { title: 'a', year: 2018, rating: 4.5 },
//   { title: 'b', year: 2018, rating: 4.7 },
//   { title: 'c', year: 2018, rating: 3 },
//   { title: 'd', year: 2017, rating: 4.5 }
// ];

// const titles = movies
//   .filter(m => m.year === 2018 && m.rating >= 4)
//   .sort((a, b) => a.rating - b.rating)
//   .reverse()
//   .map(m => m.title)

//   console.log(titles);


