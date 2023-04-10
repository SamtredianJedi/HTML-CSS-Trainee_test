// Fetch API

const getToDos = async() =>
    await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((value) => value)
    .catch(error => console.error(error))

const secondFunc = async() => {
    try {
        const res = await getToDos();
        const mapUser = {}
        res.forEach(user => {
            mapUser[user.userId] = [...(mapUser[user.userId] || []), user];
        });
        console.log(mapUser);

    } catch (error) {
        console.log("ERROR!", error);
    }
};
secondFunc();