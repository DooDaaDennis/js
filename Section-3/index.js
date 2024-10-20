// const myFunction = function(){};

// console.log(myFunction());

// setTimeout(function(){
//   console.log("Delayed Message");
// }, 2000)
// let a = 1
// setInterval(() => {
//   console.log(a + " second")
//   a += 1
// }, 1000);


let i = 1;

const myInterval = setInterval(function(){
  console.log("Here is message number " + i)
  i += 1;
},1000);

setTimeout(function(){
  clearInterval(myInterval);
}, 10000);

// function myInterval(){
//   setInterval(() => {
//   console.log("Here is message number " + i)
//   i += 1
// }, 1000);

// }

// setTimeout(clearInterval(), 6000);

// myInterval();

