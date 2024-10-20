/* let myObject;

myObject = {
  a: 10,
  b: "abc"
}

console.log(myObject)

myObject.a = 15;

console.log(myObject)

myObject.c = true

console.log(myObject)

delete myObject.b

console.log(myObject)

console.log(myObject.a) */

// var myPost = {}

// myPost.title = "Object is reference type"
// myPost.postLikes = 0
// myPost.shared = false

// myPost.postLikes += 1

// delete myPost.shared

// console.log(myPost)

// const myObject = {
//   a: -10
// };

// var copyOfMyObject = myObject;

// copyOfMyObject.b = false;

// console.log(myObject);
// console.log(copyOfMyObject);

// let myObject = {
//   a: true,
//   b: null,
//   c: 25
// };

// console.log(myObject["a"]);
// console.log(myObject["b"]);

// const propertyName = "c";

// console.log(myObject[propertyName]);

const myObject = {
  a: 3,
  b: true
};

// myObject.newPropertyWithUndefinedValue = undefined //use null intead

// console.log(myObject.newPropertyWithUndefinedValue)

var objectWithNestedObject = {

};

objectWithNestedObject.nestedObject = {

};

objectWithNestedObject.nestedObject.a = null
objectWithNestedObject.nestedObject["b"] = true

console.log(objectWithNestedObject);