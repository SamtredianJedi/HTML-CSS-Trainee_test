const getToDos = async() =>
    await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .catch(error => console.error(error))

const secondFunc = async() => {
    try {
        const res = await getToDos();
        const mySet = Array.from({ length: 11 }, () => new Set()); // pre-allocate the size of the array
        for (const user of res) {
            mySet[user.userId].add(user);
        }
        console.log(mySet);

    } catch (error) {
        console.log("ERROR!", error);
    }
};
secondFunc();