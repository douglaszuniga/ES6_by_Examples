//** 
// let:
// block scope - temporal dead zone
var condition = true;
if (condition) {
	let a = 1;
	console.log(a); // 1
}
console.log(a); // undefined
let a = 1;
// --
(function() { 
  { 
    function foo () { 
      console.log('foo!'); 
    }
    foo(); // foo
  } 
  foo(); // error
})();
// no hoisting
console.log(typeof a); // undefined
let a = 'a';
// unique in scope
var condition = true, a = 'a';
if (condition) {
  var a = 'b';
  let a = 'aa'; // <- error, already defined
  console.log(a); 
}
console.log(a); // ??
// for-loop problem
// let will create a variable for each iteration
// var will create an unique variable shared in each iteration
var funcs = [];
for (var i = 0; i < 10; i++) {
	funcs.push(function() {
		console.log(i);
	});
}
funcs.forEach(function(func) {
	func();
});
// fix ES5
var funcs = [];
for (var i = 0; i < 10; i++) {
	funcs.push(
		(function(value) {
			return function () {
				console.log(value);
			}
		}) (i)
	);
}
funcs.forEach(function(func) {
	func();
});
// **
// const
const a = 'somevalue';
a = 'ss'; //error
// complex values like object and arrays, their content can be modified
const b = [1,2,3];
b[1] = 0; // [1,0,3]
// -> can no be collected by GC until its scope is done


