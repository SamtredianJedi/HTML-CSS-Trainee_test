const submitButton = document.getElementById("submit");
const searchTermInput = document.getElementById("searchTerm");
const forSearchInput = document.getElementById("forSearch");

document.getElementById("searchForm").addEventListener("submit", async(event) => {
    event.preventDefault();

    const filterMethod = searchTermInput.value;
    const inputValue = forSearchInput.value;

    if (!inputValue) {
        console.log("Please enter a value.");
        return;
    }



    const apiUrl = "https://jsonplaceholder.typicode.com/todos?";
    let apiUrlWithFilter;

    if (filterMethod === "userId") {
        apiUrlWithFilter = { apiUrl }
        userId = { inputValue };
    } else if (filterMethod === "title") {
        apiUrlWithFilter = { apiUrl }
        title_like = encodeURIComponent(inputValue)
    } else {
        console.log("Invalid filter method selected.");
        return;
    }

    try {
        const response = await fetch(apiUrlWithFilter);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
});