// Fetch API

const getToDos = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const secondFunc = async() => {
    try {
        const todos = await getToDos();
        const userToDos = todos.reduce((acc, todo) => {
            acc[todo.userId] = [...(acc[todo.userId] || []), todo];
            return acc;
        }, {});
        console.log(userToDos);
    } catch (error) {
        console.log("ERROR!", error);
    }
};

secondFunc();