//**
// String
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//  - includes()
//  - startsWith()
//  - endsWith()
//  - repeat() 
var message = 'this is a string';
message.includes('is');
message.startsWith('this');
message.endsWith('ing');
'a'.repeat(3); //aaa

// Template String
var someString = `this is a '\n' string`;
// multiline
somethingString = `this is 
a string`;
// interpolation
var name = 'Juan de la Nieve';
console.log(`My name is ${name}`);

//**
// Number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
Number.EPSILON; //2.2204460492503130808472633361816E-16
Number.isNaN('asd'); // true
Number.isFinite(Infinity); //false
Number.isInteger(1.1); //false
Number.parseInt();
Number.parseFloat();
//-2^53 ..0.. 2^53
Number.MAX_VALUE;
Number.MAX_SAFE_INTEGER;
Number.MIN_VALUE;
Number.MIN_SAFE_INTEGER;
Number.isSafeInteger();
// binary
var binaryFive = 0b101; //5
// octal
var octal = 0o071; //57 