function mergeArraysOrObjects(arr1, arr2, dataType) {
    if (dataType === "array") {

        const mergedArr = [...arr1, ...arr2];
        return mergedArr;

    } else {

        const mergedArr = {...arr1, ...arr2 }
        return mergedArr;
    }

}

const name = {
    name: "rezo",
    lastname: "xsssuchua",
}


const person = {
    age: 21
}


const fruits = ["banana", "grape", "apple", "Mango"]

const vegetables = ["carrot", "tomato", "potato", "broccoli"]

console.log(mergeArraysOrObjects(name, person, "arrhgvuay"))