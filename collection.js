// http://www.2ality.com/2015/01/es6-maps-sets.html
// Sets
var s = new Set().add("i").add("am").add(2);
// new Set(['i', 'am', 2]);
s.size === 2;
s.has(2) === true;

// iteration
for (let i of s) {
	console.log(i);
}

s.forEach(x => console.log(x));

s.delete(2);
s.clear();

// Maps
var m = new Map();
m.set("life", 42);
m.set(s, 34);
m.get(s) == 34;
m.has('life');
m.delete(s);
m.size;

let a = new Map([[1, 11], [2, 22]]);
a.has(1);
a.get(2);

//iteration
for (let key of a.keys()) {
	console.log(key);
}

for (let key of a.values()) {
	console.log(key);
}

for (let [key, value] of a.entries()) {
	console.log(key + ' - ' + value);
}

a.forEach((x, y) => console.log(x + '--' + y));

// spread
let mapArray = [...a.keys()];


