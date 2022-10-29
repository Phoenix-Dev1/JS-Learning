
// //Exercise 1 - Address Object
// let address = {
//   street: 'Hebron',
//   city: 'Tiberias',
//   zipCode:'1436804'
// }

// function showAddress(address){
// for(key in address)
//   console.log(key,address[key]);
// }

// showAddress(address);

// Exercise 2 - Factory and Constructor Function

//Factory
// function createAddress(street, city, zipCode){
//   return{
//     street, city, zipCode
//   };
// }

// let address1 = createAddress('Hebron', 'Tiberias', '1436804');


// //Ctor
// function Address(street, city, zipCode){
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }


// let address2 = new Address('Hebron', 'Tiberias', '1436804');

//Exercise 3- Object Equality
//Ctor
// function Address(street, city, zipCode){
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// let address1 = new Address('Hebron', 'Tiberias', '1436804');
// let address2 = new Address('Hebron', 'Tiberias', '1436804');
// let address3 = address1;

// function areEqual(address1,address2){
//   return address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode;
// }

// function areSame(address1,address2){
//   return address1 === address2;
// }

// areEqual(address1,address2);  // true
// areSame(address1,address2);   // false
// areSame(address1,address3);   // true

//Exercise 4- Blog Post Object

// let post = {
//   title: 'JavaScript',
//   body: 'It\'s really fun',
//   author: 'Bar',
//   views:1000,
//   comments:[
//     { author: 'a', body: 'b'},
//     { author: 'c', body: 'd'}
//   ],
//   isLive:true
// };

// console.log(post);

//Exercise 5- Constructor Functions
  // let post = new Post('a', 'b', 'c');

  // console.log(post);

  // function Post(title, body, author){
  //   this.title = title;
  //   this.body = body;
  //   this.author = author;
  //   this.views = 0;
  //   this.comments = [];
  //   this.isLive = false;
  // }

  //Exercise 6- Price Range Objects

  let xs = {
    cheap:[0-1],
    moderate:[2-3],
    expensive:[4-9]
  };

  let priceRanges = [
    {label: '$', tooltip:'Inexpensive', minPerPerson: 0, maxPerPerson:10},
    {label: '$$', tooltip:'Moderate', minPerPerson: 11, maxPerPerson:20},
    {label: '$$$', tooltip:'Expensive', minPerPerson: 21, maxPerPerson:50}
  ];

  let restaurants = [
    { averagePerPerson:5}
  ];