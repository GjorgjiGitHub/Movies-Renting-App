// * Create a movie renting app
// * There should be an array of movie names
// * There should be an input and a search button
// * When the person enters a name of a movie it should search the array
// * If the name exists it should show an H1 element that says: "The movie can be rented" in green text
// * If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
// * The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

let inputMovieName = document.getElementById("inputMovieName");
console.log(inputMovieName.value);
let btnSearch = document.getElementById("btnSearch");
let result = document.getElementById("result");

let moviesArray = ["blade runner", "the hobbit", "toy story", "spider-Man"];

function searchMovie(array, userChoice) {


    for (let i = 0; i < array.length; i++) {
        if (array[i] === userChoice) {
            return result.innerHTML = `<h1 style="color: green;">The movie can be rented</h1>`
        }
    }
    return result.innerHTML = `<h1 style="color: red;">The movie can't be rented</h1>`
}

btnSearch.addEventListener("click", function () {
    searchMovie(moviesArray, inputMovieName.value);
});










