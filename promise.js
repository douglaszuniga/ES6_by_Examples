//**
// promises
// http://www.html5rocks.com/en/tutorials/es6/promises/

// can only succeed of fail once
// can be:
// fulfilled -> succeed
// rejected -> failed
// pending -> hasn't fulfilled or rejected yet
// settled -> has fulfilled or failed

// --
// standard: Promises/A+. https://github.com/promises-aplus/promises-spec
//
// basic syntax
// create a promise
var somePromise = new Promise(function(resolve, reject) {
  // some work...
  // everything is ok
  if (...) {
    resolve(data);
  } else {
    reject(Error('some error message'));
  }
});
// consume a promise
somePromise.then(
  function(result) {
  // dome something with result data
  },
  function(error) {
  // do something with error
  }
);

// -- Promise API
Promise.all([promise1, promise2, promise3])
  .then(function(arrayOfResults) {
  ...
});
Promise.resolve(1);
Promise.reject(new Error('some message'));
Promise.race([promise1, promise2, promise3])
  .then(firstPromiseToResolveData => doSomething...)
  .catch(firstPromiseToRejectData => doSomethingElse...);
