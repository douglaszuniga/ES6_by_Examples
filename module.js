//**
// ES6 modules
// basic syntax:
// --
// 'export', 'import' simple like commonJS
// lib.js
export function sum(a, b) {
  return a+b;
};
export function PI() {
  return Math.PI;
};
let arrowFunction x => x + 1;
export arrowFunction;
export let x = 1;
// main.js
// named import
import { sum as suma, PI, arrowFunction, x as letX} from 'lib';
// import everything from lib.js
import * from 'lib';
console.log(PI()); //3.14...
console.log(suma(1, arrowFunction(letX))); // 1 + (1+1)
// --
// export default - one per module
// lib-2.js
export default function doSomething() {
  return 'do something';
};
// main.js
// import default and rename it as 'algo'
import algo from 'lib-2'
console.log(algo());

// -- exporting class
// clazz.js
export default class {...}
// main.js
import someClass from 'clazz';
let clazzz = new someClass();
