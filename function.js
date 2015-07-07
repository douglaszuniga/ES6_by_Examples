// **
// lambda - arrow
// restrictions:
// 1. no new allowed, (no [[Construct]] no prototype)
// 2. 'this' can't be modified (lexical 'this')
// 3. no arguments object (must use ES6 rest params)
// simple
var a = x => x + 1;
// complex
x => {
	let y = x + 1;
	console.log(y);
	return y < 2;
}
// multiple arguments
(x, y) => x > y;
// lexical binding
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
// **
// default parameters
function someFunction(arg0 = 1, arg1 = 2) {}
// **
// rest parameters
function someFunction(arg0, ...args) {
  args.forEach(x => console.log(x));
}
someFunction(1, 2, 3, 4, 5);
// **
// spread operator
// syntactic replacement for apply()...
let array = [1,2,3,4,5];
// equivalent to console.log(Math.max(1,2,3,4,5,0,6));
console.log(Math.max(...array, 0, 6));
//-- can be used in arrays too
var a = [2,3,4];
var b = [ 1, ...a, 5 ];
console.log( b ); // [1,2,3,4,5]

// **
// destructing aka structured assignment
// when properties names are the same (source and target)
function setCookie(name, value, { secure, path, domain, expires } = {}) {}
// otherwise // source:value
function setCookie(name, value, { secure: scr, path: pth, domain: dmn, expires: xprs } = {}) {}

setCookie('name', 'value', {
    secure: true,
    expires: 60000
});
// -- confused?
var aa = 10, bb = 20;

var o = { x: aa, y: bb }; // object literal assignment - pattern target:source
var     { x: AA, y: BB } = o; // destructing aka structured assignment - pattern source:pattern

// x and y are object properties
console.log( AA, BB );              // 10 20
// **
// block level function
if (true) {
	function someFunction() {
		console.log('inside');
	}
}
someFunction(); // error

