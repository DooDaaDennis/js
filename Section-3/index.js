// FOR

// for(let i = 0; i < 4; i++){
//     console.log(i);
// }

// const myArray = ["first", "second", "third"];

// for (let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }


// WHILE
// let i = 0;

// while (i < 5){
//     console.log(i);
//     i++;
// }

// DO WHILE
// let i = 0
// do {
//     console.log(i);
//     i++;
// } while (i<5);

// FOR IN

// const myObject = {
//     x: 10,
//     y: true,
//     z: "abc"
// }

// // for (let key in myObject){
// //     console.log(key, myObject[key]);
// // }

// const myArray = [true, 10, "abc", null];

// // for (let key in myArray){
// //     console.log(myArray[key]);
// // }

// // FOR OF - not with objects, not iterable

// for (let element of myArray){
//     console.log(element);
// }

// IF
// let val = 10;
// if (val > 5){
//     val += 20;
// }

// console.log(val);

// IF ELSE
// let val = 10
// if(val < 5){
//     val += 20;
// } else{
//     val -= 20;
// }
// console.log(val);

// SWITCH
// let month = 2;
// switch (month){
//     case 1:
//         console.log("It is January");
//         break;
//     case 2:
//         console.log("It is February");
//         break;
//     default:
//         console.log("It's some other month");
// }

// TERNARY OPERATOR

//Condition ? Expression1 : Expression2`

// let value = 12;

// value
//     ? console.log("Value is truthy")
//     : console.log("Value is falsy");

// let value1 = 11;
// let value2 = 25;

// value1 && value2    
//     ? myFunction1(value1, value2)
//     : myFunction2();


//challenge 1

// const myObject ={
//     key1: true,
//     key5: 10, 
//     key3: "abc",
//     key4: null,
//     key10: NaN
// }

// for (let key in myObject){
    
//     switch  (key){
//         case "key1":
//             console.log(myObject[key]);
//             break;
//         case "key3":
//             console.log(myObject[key]);
//             break;
//         default:
//     }}

//challenge 2
// const MIN = 1000;
// const MAX = 9999;
// const myNumbers = [
//     2355,
//     7235,
//     8135,
//     1762,
//     2361,
//     8351
// ];

// let newRandomNumber;

// let l = myNumbers.length

// function getRandomInt(min, max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function isNotUnique(newRandomNum){
//     for (let number of myNumbers){
//         if (newRandomNum === number){
//             return true;
//         }
//     }
// }


// do { 
//     newRandomNumber = getRandomInt(MIN,MAX);
//     console.log(newRandomNumber);

// } while (isNotUnique(newRandomNumber));

// myNumbers.push(newRandomNumber);
// console.log(myNumbers)

// const myObject = {
//     name: "Mike",
//     age: 30,
//     city: "London"
// };

// Object.prototype.country = "England";

// for (let key in myObject){
//     if(myObject.hasOwnProperty(key)){
//         console.log(myObject[key]);
//     }
// }

// challenge 4

// function emptyArray(inputArray){
//     if (inputArray.length > 0){
//         return "Array is not empty";
//     } else {
//         return "Array is empty";
//     }
// }



function emptyArray(inputArray){
    return inputArray.length > 0
        ? "Array is not empty"
        : "Array is empty";
}

console.log(emptyArray([1,3]))
console.log(emptyArray([]))