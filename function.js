// lambda - arrow
// restrictions: 1. no new allowed, 2. 'this' can't be modified 3. no arguments object
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
// default parameters
function someFunction(arg0 = 1, arg1 = 2) {}
// rest parameters
function someFunction(arg0, ...args) {
  args.forEach(x => console.log(x));
}
someFunction(1, 2, 3, 4, 5);
// spread operator
let array = [1,2,3,4,5];
// equivalent to console.log(Math.max(1,2,3,4,5,0,6));
console.log(Math.max(...array, 0, 6));
// destructing 
function setCookie(name, value, { secure, path, domain, expires } = {}) {

}
setCookie('name', 'value', {
    secure: true,
    expires: 60000
});
// block level function
if (true) {
	function someFunction() {
		console.log('inside');
	}
}
someFunction(); // error

