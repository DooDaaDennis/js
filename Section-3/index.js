// const myArray = [1,2,3];
// const myArray2 = new Array(1,2,3);

// console.log(myArray === myArray2);
// console.log(myArray == myArray2)

// const myArray = [true, null];
// myArray.unshift("Hello");
// myArray.unshift(100);


// console.log(myArray);

// const myArray = [1,2];

// myArray[10] = "abc";

// console.log(myArray);
// console.log(myArray.length);

const car1 = {
    carBrand: "Mercedes",
    price: 20000
}

const car2 = {
    carBrand: "Honda",
    price: 15000
}

const car3 = {
    carBrand: "Ford",
    price: 18000
}

const car4 = {
    carBrand: "Jaguar",
    price: 40000
}

const arrayOfCars = [car1, car2, car3];

arrayOfCars.push(car4);

console.log(arrayOfCars);