// class like '
// http://www.2ality.com/2015/02/es6-classes-final.html
class superClass {
	constructor(value) {
		this.value = value;
		this.name = 'superClass';
	}
	speak() {
		return '(' + this.name + ' - ' + this.value + ')';
	}
};

class someClass extends superClass {
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

let parentClass = new superClass(1);
console.log(parentClass.speak());
let subclass = new someClass(1, 2);
console.log(subclass.speak());
console.log(someClass.run());