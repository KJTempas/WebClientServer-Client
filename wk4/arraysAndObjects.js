/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab 4. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
};

// TODO Extract the latitude value, and log it to the console.
console.log('Space station latitude: ' ,iss_location.iss_position.latitude)
// TODO Extract the longitude value, and log it to the console.
console.log('Space station longitude: ', iss_location.iss_position.longitude)

console.log(" ")

/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
};

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787
console.log(rates) //to check if CHF attribute appeared

// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)
let exchangeRate = rates.AUD //get the exchange rate from the dictionary in the object
//console.log(exchangeRate) //  prints 1.6517 -OK so far
let australianDollars = 100 * exchangeRate
console.log('100 Euros can be exchanged for ' + australianDollars.toFixed(2) + ' Australian Dollars.') //works

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
console.log("The currency symbol that has the highest exchange rate compared to Euros is : ")
//loop through rates - set 1st value as max; compare next one to it-if greater, set that as max
//var i;
var max = rates.AUD  //get the 1st value - works
console.log(max) //prints 1.5417 - correct
//console.log(rates.length)  //undefined
//rates.exchangeRate.forEach(function(exchangeRate) {  //error - can't read property forEach of undefined
console.log(rates)  //prints the object - all of the key/value pairs
console.log(rates[2])  //undefined
console.log(rates[2].exchangeRate) //cannot read property 'exchange rate" of undefined
//HOW TO ACCESS VALUES
  //if (exchangeRate>max) {
   // max=exchangeRate
  //}
//})
  //if(rates[i].exchangeRate>max) {
   // max=rates[i].exchangeRate
  

console.log(max)  //printing 1.5417 still

//planB - make an array of exchange rates - does not work
/*let valuesList=[]
for(i=0;i<rates.length; i++) {
  valuesList.push(rates[i].exchangeRate)  //yielding an empty array
  
}
console.log(valuesList)*/
//below from slides
/*x = findMax(values from rates go here)  //
function findMax(){  //slide 20
  var i;
  var max='Infinity';
  for(i =0; i<arguments.length; i++) {
    if (arguments[i] >max) {
      max=arguments[i];
    }
  }
  return max
}*/
//if an array, can use arrayName.sort() but this is not an array
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.


console.log(" " )  //space between sections
/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
];

// TODO print Gary Oldman's cat's name
console.log("Gary Oldman's cat is named " + cats_and_owners[1].cat) // works
console.log(" ")

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"})

console.log(cats_and_owners[4].name + " has a cat named " + cats_and_owners[4].cat)
console.log(cats_and_owners)
console.log(" ")

// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
console.log('Cat owners and their cat\'s names:')
cats_and_owners.forEach(function(element){
  console.log(element.name  +  " has a cat named " + element.cat)
  
})
console.log(" ") //an empty line between sections

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */




let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
};

// TODO print the full name of the Literature Nobel laureate.
 let firstName= nobel_prize_winners_2017.prizes[3].laureates[0].firstname
 let surname = nobel_prize_winners_2017.prizes[3].laureates[0].surname
 let fullName = firstName +" " +  surname
 console.log("The Nobel prize winner for literature in 2017 was: " + fullName)
console.log(" " )

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
let idList = []
for(let i=0; i<nobel_prize_winners_2017.prizes[0].laureates.length; i++) {
  idList.push(nobel_prize_winners_2017.prizes[0].laureates[i].id)
}
console.log("These are the ids of each of the Physics Nobel laureates: " + idList)
console.log(" " )

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
let categories = []  //list to hold the category names
for(let i=0; i<nobel_prize_winners_2017.prizes.length; i++ ){ //loop through the prizes
  categories.push(nobel_prize_winners_2017.prizes[i].category) //add each categoy to the array
}
console.log("This is a list of the Nobel prize categories: " + categories) 
console.log(" ") //just to put a space between answers for ease in reading

// TODO write code to print the total number of prize categories
//length of the array - slide 48
numberOfCategories = nobel_prize_winners_2017.prizes.length
console.log(`There are ${numberOfCategories} prize categories.`)

// TODO write code to count the total number of laureates from 2017. 
//let counter = 0;   
// loop through and add 1 to the counter each time - need a nested for loop
let listOfIds = []  //answer should be 12 - could get all Ids in an array and determine the length of the array
for(let i=0; i<nobel_prize_winners_2017.prizes.length; i++ ){ //loop through prizes - an array of objects
//console.log(nobel_prize_winners_2017.prizes[i]) //giving me lots - physics and chem and medicine......
//console.log(nobel_prize_winners_2017.prizes[0].laureates) //prints 3 physics winners(id/names/etc) multiple timess
//console.log(nobel_prize_winners_2017.prizes[i].length) //undefined


  for(let x=0; x<nobel_prize_winners_2017.prizes[i].length; x++){ //within each prize, loop through the array of objects
  let id=nobel_prize_winners_2017.prizes[i].laureates[x].id//should get the 1stprize object's first laureate's id, then 1st prize, 2nd laureate's id
  console.log(id)  //nothing prints
  listOfIds.push(id)  //add the id to the array
  }
}   
console.log(nobel_prize_winners_2017.prizes[1].laureates[2].id) //prints 946, so accessed correctly
console.log(listOfIds)   //yields and empty array
console.log(listOfIds.length)  //length would be total # of ids or total # of winners
  
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.
