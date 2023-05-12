// destructing




// const person = {

//     name: 'rezo',
//     surname: 'Xuchua',
//     age: 21,
//     address: {
//         city: 'samtredia',
//         state: 'Texas',
//         country: 'Usa'
//     }
// }


// displayMessage(person)


// function displayMessage({
//     address: { state }
// }) {
//     const message = 'I live in ' + state + '.';
// }

// console.log(person)



//// spread

// const arrayOne = ['a', 'b', 'c'];
// const arrayTwo = [1, 2, 3];
// const arraysCombined = [
// ...arrayOne, ...arrayTwo
// ];






// const fetchAPI = async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await response.json();

//     console.log({ response });
// };

// fetchAPI();


// map 


// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//     return num * 10;
// }

// console.log(newArr)

//  array push method


// const fruits = ["banana", "apple", "juice", "mango"]

// fruits.pop();


// const ages = [1, 4, 5, 6]

// ages.some(checkAdult)

// function checkAdult(age) {
//     return age > 18
// }




const getToDos = async() => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((value) => value);

    console.log("result: ", result);

    return result;
};
getToDos();

const secondFunc = async() => {
    try {
        const res = await getToDos();
        console.log("in second func:", res);
    } catch (error) {
        console.log("ERROR!", error);
    }
};
secondFunc();





// const getToDos = async () => {
//     const result = await fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((value) => value);

//     console.log("result: ", result);

//     return result;
//   };
//   getToDos();

//   const secondFunc = async () => {
//     try {
//       const res = await getToDos();
//       console.log("in second func:", res);
//     } catch (error) {
//       console.log("ERROR!", error);
//     }
//   };
//   secondFunc();












// const promiseFunc = () =>
//   new Promise((resolve, reject) => {
//     const isValiBack = false;
//     if (isValiBack) {
//       resolve("RESOLVED!");
//     } else {
//       reject("REJECTED!");
//     }
//   });

// promiseFunc()
//   .then((value) => {
//     console.log("Inside then:", value);
//   })
//   .catch((reason) => {
//     console.log("Inside catch:", reason);
//   });

// const myPromise = promiseFunc();







/**
 * 
 * let person = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'C.',
    currentAge: 28
};

let { firstName,  lastName, middleName = '', currentAge: age = 18 } = person;

console.log(middleName); // 'C.'
console.log(age); // 28


 */