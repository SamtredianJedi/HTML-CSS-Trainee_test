const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY",
        country: "USA",
    }
}

const { name, age, address: { city } } = person;
const { name: rezo, age: asaki, address: { city: sadme } } = person;
console.log(rezo); // Output: "John"
console.log(asaki); // Output: 30
console.log(sadme); // Output: "New York"



console.log(name); // Output: "John"
console.log(age); // Output: 30
console.log(city); // Output: "New York"