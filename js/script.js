const sports = ["golf", "football", "cricket"];

const games = [
    {
        name: "Starcraft 2",
        released: "2010",        
    },
    {
        name: "Age of Empires II",       
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];

//Question 1

function printSeason(season) {
    console.log(season);
}

printSeason("summer");

//Question 2

function printNumbers(firstNumber, secondNumber) {
    console.log(firstNumber);
    console.log(secondNumber);
}

printNumbers(3, 6);


//Question 3

function addNumbers(num1, num2, num3) {
    let result = num1 + num2 + num3;
    //console.log(result) ;
    return result;
}
let result = addNumbers(3, 3, 3)
let innerResult = document.querySelector(".total");
innerResult.innerHTML = result;
// console.log(result);


//Question 4

function createGreeting(someText) {
    let newString = someText;
    return newString;
}

let insertString = createGreeting("Hello, my name is");

innerNewString = document.querySelector("#name");
innerNewString.innerHTML = insertString;

//Question 5

function printListItems(listItems) {
    for (let i = 0; i < listItems.length; i++){
        console.log(listItems[i]);
    }
}

printListItems(sports);

//Question 6
innerDivGames = document.querySelector(".game-container");
console.log(innerDivGames);

// let names = "";
// let releas = "";
function createGames(parametr) {
    let innGamesHtml = "";
    for (let i = 0; i < parametr.length; i++) {
        // let names = parametr[i].name;
        // let releas = parametr[i].released;
// innGamesHtml =`<h2>${parametr[i].name}</h2>
//                 <p>${parametr[i].released}</p>`;
//                 return innGamesHtml;
    

innGamesHtml +=`<div>
                    <h2>${parametr[i].name}</h2>
                    <p>${parametr[i].released}</p>
                    </div>`;
                
            }
            return innGamesHtml;
     }

createGames(games);

innerDivGames.innerHTML += innGamesHtml;