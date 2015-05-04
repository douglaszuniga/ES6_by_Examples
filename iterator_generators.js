// http://www.2ality.com/2015/02/es6-iteration.html
// iterator (typescript like)
interface IteratorResult {
  done: boolean;
  value: any;
}
interface Iterator {
  next(): IteratorResult;
}
interface Iterable {
  [Symbol.iterator](): Iterator
}

// --
// entries() - returns an iterator whose values are a key-value pair.
// values() - returns an iterator whose values are the values of the collection.
// keys() - returns an iterator whose values are the keys contained in the collection.

//Symbol.iterator is like a constant 
// iteration
let array = [1,2,3];
for (let a of array) {
	//something
}

for (let a of array.values()) {
	//something
}
// default iterator
let aIterator = array[Symbol.iterator]();
aIterator.next(); // { value: 1, done: false}
aIterator.next(); // { value: 2, done: false}
aIterator.next(); // { value: 3, done: false}
aIterator.next(); // { value: undefined, done: true}

// http://www.2ality.com/2015/03/es6-generators.html
// generators - pause - resume
// 
function *aaa() {
	yield 1;
	yield 2;
}
let a = aaa();
a.next();
a.next();

//
let generatorFunc = function *createIterator(items) {
	for (let i = 0; i < items.length; i++) {
	    yield items[i];
  }
};

let arrayIterator = generatorFunc([1,2]);
arrayIterator.next();
arrayIterator.next();
arrayIterator.next();

// 
let obj = {
	*getIterator(items) {
		for (let i = 0; i < items.length; i++) {
			yield items[i];
		}
	}
};

obj.getIterator([1,2]);

// override default iterator
let collection = {
    items: [],
    *[Symbol.iterator]() {
    	// delegates to the array iterator
        yield *this.items.values();
    }
};
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for (let x of collection) {
    console.log(x);
}