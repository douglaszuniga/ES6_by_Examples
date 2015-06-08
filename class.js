// class like '
// http://www.2ality.com/2015/02/es6-classes-final.html
class SuperClass {
	constructor(value) {
		this.value = value;
		this.name = 'superClass';
	}
	speak() {
		return '(' + this.name + ' - ' + this.value + ')';
	}
};

class SomeClass extends SuperClass {
	constructor(value, otherValue) {
    	super(value);
    	this.otherValue = otherValue;
		this.name = 'someClass';
	}
	speak() {
		return "I'm (" + this.name + " - " + this.otherValue + ") and my parent is " + super.speak();
	}
	static run() {
		return 'running';
	}
};

let parentClass = new SuperClass(1);
console.log(parentClass.speak());
let subclass = new SomeClass(1, 2);
console.log(subclass.speak());
console.log(SomeClass.run());

// pre-ES6 ~
function SuperClass2(value) {
	this.value = value;
	this.name = 'superClass';
}
SuperClass2.prototype.speak = function() {
	return '(' + this.name + ' - ' + this.value + ')';
}
function SomeClass2(value, otherValue) {
	SuperClass2.call(this, value);
	this.otherValue = otherValue;
	this.name = 'someClass';
}
SomeClass2.prototype = Object.create(SuperClass2.prototype);
SomeClass2.constructor = SomeClass2;
SomeClass2.prototype.speak = function() {
	return "I'm (" + this.name + " - " + this.otherValue + ") and my parent is " 
	+ SuperClass2.prototype.speak.call(this);
}
SomeClass2.run = function() {
	return 'running';
}
