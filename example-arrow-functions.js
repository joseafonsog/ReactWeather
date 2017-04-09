// var names = ['Andrew','Jose','Gladelys'];
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFun', name);
// });
//
// names.forEach((name) => console.log('arrowFun', name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Jose'));
//
// var person = {
//   name: 'Jose',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

// Challenge Area
function add (a, b) {
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
  return a + b;
};

var addExpression = (a, b) => a + b;

console.log(addStatement(2, 3));
console.log(addExpression(6, 0));
