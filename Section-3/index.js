var x = 10;
const y = true;
var anotherObject;

const myObject = {
  a: x,
  b: y,
};

x = 20;

anotherObject = {
  newA: x,
  b: y,
  c: myObject,
};

console.log(myObject);
console.log(anotherObject);
