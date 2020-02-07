let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')
let playAgainELement = document.querySelector('#playAgain')
//let url = 'http://api.worldbank.org/v2/country/br?format=json '
//let url='http://api.worldbank.org/v2/country/' + countryAbbrev + '?format=json '  //includes code from countriesAndCodes

// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array of country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files as one big file, o
// organized in the order of the script tags so the countriesAndCodes array is available to this script.

console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available 


// TODO when the page loads, select an element at random from the countriesAndCodes array
//from stack overflow
    let randomCountry = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)];
console.log(randomCountry) //works - see Object w/ name, alpha-2 and country-code; different each time refresh
//console.log(randomCountry["country-code"])
let countryAbbrev = randomCountry["alpha-2"]
console.log(countryAbbrev)
console.log(randomCountry["alpha-2"])
// TODO display the country's name in the randomCountryElement 
randomCountryElement.innerHTML = randomCountry.name  //shows country name to user-works

let url='http://api.worldbank.org/v2/country/' + countryAbbrev + '?format=json '
// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the country code (from countriesAndCodes)
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"

submitButton.addEventListener('click', function() {
    let userAnswer=userAnswerElement.value  //get answer the user typed in
    console.log(userAnswer)  //works
   //make a call to World Bank API
   fetch(url) 
    .then( res => res.json() )   //converts response to JSON object
    .then( data => {
        console.log(data) //getting a result. 
        //extract capital city from API response
        console.log(data[1])//working - one step down
        console.log(data[1])
        console.log(data[1].capitalCity)//undefined
        //let capCity =     
        //check answer vs data here



    })
    .catch( err => {
        console.log(err)
        alert("Error in program")
    })


})

playAgainELement.addEventListener('click', function() {
    //clear user's answer
    userAnswer.innerHTML=''

})


// TODO finally, connect the play again button. Clear the user's answer, select a new random country, 
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice. 