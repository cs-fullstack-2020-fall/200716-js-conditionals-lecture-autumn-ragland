// check that JS file is linked to HTML
console.log("Sanity Check");

// BASIC IF STATEMENT ------------------------------------------------------

let flag = true; // flag is true or false

if (flag) { // if the value if flag is true
    // print message
    console.log("The flag is true");
}

let testName = "Autumn";

if (testName == "Autumn") { // if value of variable testName is "Autumn"
    // print message
    console.log("The test name is Autumn");
}

// COMPARISONS ------------------------------------------------------
// == : are values equal
// === : are values and type equal
// != : are values not equal
// > : greater than
// < : less than 

let nameOne = "Kenn";
let nameTwo = "Kevin";

if (nameOne == nameTwo) { // if the value of variable nameOne and nameTwo are equal
    // print message
    console.log("The names are the same!");
}

if (nameOne != nameTwo) { // if the value of variable nameOne and nameTwo are not equal
    // print message
    console.log("The names are not the same");
}

let stringAge = "35";
let intAge = 35;

if (stringAge == intAge) { // if the value of variable stringAge and intAge are equal
    // print message
    console.log("These values are the same");
}

if (stringAge === intAge) { // if the value of variable stringAge and intAge are equal and the same value
    // print message
    console.log("These values are the same AND of the same type");
}

let userNum = parseInt(prompt("Enter the number 35")); // get user input and change type to integer

if (intAge === userNum) { // if the value of variable userNum and intAge are equal and the same value
    // print message
    console.log("Int Age and User Num are strictly equal");
}

let num1 = 50;
let num2 = 25;

if (num1 < num2) { // if the value of variable num1 is greater than the value of variable num2
    // print message
    console.log("Number one is less than Number 2");
}

if (num1 > num2) { // if the value of variable num1 is less than the value of variable num2
    // print message
    console.log("Number one is greater than Number 2");
}

if (num1 == num2) { // if the value of variable num1 is equal to the value of variable num2
    // print message
    console.log("Number One is equal to Number Two");
}

// IF ... ELSE STATEMENT ------------------------------------------------------

num1 = 50;
num2 = 25;
if (num1 < num2) { // if the value of variable num1 is greater than the value of variable num2
    // print message
    console.log("Number One is less than number two");
} else { // OTHERWISE if the value of variable num1 is NOT greater than the value of variable num2
    // print message
    console.log("Number One is greater than number two");
}

if (num1 < num2) { // if the value of variable num1 is less than the value of variable num2
    // print message
    console.log("Number One is less than number two");
} else if (num1 > num2) { // OTHERWISE if the value of variable num1 is greater than the value of variable num2
    // print message
    console.log("Number One is greater than Number 2");
} else { // OTHERWISE if the value of variable num1 is NOT greater than OR less than the value of variable num2
    // print message
    console.log("Number One and Number Two are equal");
}

// SYNTAX REVIEW ------------------------------------------------------
if (`some condition`) {
    `code to run if condition is true`;
}

if (`some condition`) {
    `code to run if condition is true`
} else {
    `code to run if condition is false`
}

if (`some condition`) {
    `code to run if condition is true`
} else if (`some other condition`) {
    `code to run if other condition is true`
} else {
    `code to run if above conditions are false`
}

// NESTED IF STATEMENT ------------------------------------------------------
// % 2 : remainder after division by 2

num1 = 55;

if (num1 > num2) { // if the value of variable num1 is greater than the value of variable num2
    // nested if
    if (num1 % 2 == 0) { // if the value of variable num1 has no remainder when divided by 2
        // print message
        console.log("Number 1 is the greater Number AND divisible by 2");
    } else { // OTHERWISE if the value of variable num1 DOES have a remainder when divided by 2
        // print message
        console.log("Number 1 is greater than Number 2");
    }
} else { // if the value of variable num1 is NOT greater than the value of variable num2
    // print message
    console.log("Number 1 is not greater than Number 2");
}

// LOGICAL OPERATORS ------------------------------------------------------
// AND : && -- TRUE AND TRUE = TRUE; TRUE AND FALSE = FALSE; FALSE AND FALSE = FALSE
// OR : || -- TRUE OR TRUE = TRUE; TRUE OR FALSE = TRUE; FALSE OR FALSE = FALSE

let codeCrewTeamOne = "Autumn";
let codeCrewTeamTwo = "Kevin";
let codeCrewTeamThree = "Kenn";


if (codeCrewTeamTwo == "Erin" || codeCrewTeamThree == "Meka") { // if the value of the variable codeCrewTeamTwo  is "Erin" OR the value of the variable codeCrewTeamThree is "Meka"
    // print message
    console.log("At least one is a team member");
} else { // OTHERWISE if the value of the variable codeCrewTeamTwo  is not "Erin" AND the value of the variable codeCrewTeamThree is not "Meka"
    // print message
    console.log("At least one is a team member");
}

if (codeCrewTeamTwo == "Meka" && codeCrewTeamThree == "Erin") {// if the value of the variable codeCrewTeamTwo  is "Erin" OR the value of the variable codeCrewTeamThree  is "Meka"
    // print message
    console.log("Both are team members");
} else { // OTHERWISE if the value of the variable codeCrewTeamTwo  is not "Erin" OR the value of the variable codeCrewTeamThree is not "Meka" 
    // print message
    console.log("At least one is a team member");
}
