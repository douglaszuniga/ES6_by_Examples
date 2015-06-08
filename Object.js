//**
// intro http://www.objectplayground.com/
// Object
Object.is(val1, val2); //similar to ===
var obja = {};
Object.assing(obja, { b: function() {}});
//**
// Object Destructuring
var options = {
        repeat: true,
        save: false
    };
    
var { repeat, save } = options;
var { repeat: x, save: y } = options;
//**
// Property Initializer Shorthand
// ES5
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
// ES6
function createPerson(name, age) {
    return {
        name,
        age
    };
}
//**
// Method Initializer Shorthand
// ES5
function createPerson(name) {
    return {
        talk: function() {
        	console.log(`Say my name ${name}`);
        },
    };
}
// ES6
function createPerson(name) {
    return {
        talk() {
        	console.log(`Say my name ${name}`);
        },
    };
}
//**
// Computed Property Names
var value = 'more';
function createPerson(name) {
    return {
        ['something ' + value]() {
        	console.log(`Say my name ${name}`);
        },
    };
}

var object = createPerson('aaa');
console.log(object['something ' + value]());
//**
// Object.setPrototypeOf()
Object.setPrototypeOf(currentObject, newPrototype);
currentObject.__proto__ = newPrototype;
//**
// super
let person = {
    getGreeting() {
        return "Hello";
    }
};
let friend = {
    __proto__: person,
    getGreeting() {
        // same as this.__proto__.getGreeting.call(this)
        return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
    }
};
// "better" way
let friend = {
    __proto__: person,
    getGreeting() {
        // same as Object.getPrototypeOf(this).getGreeting.call(this)
        // or this.__proto__.getGreeting.call(this)
        return super.getGreeting() + ", hi!";
    }
};
