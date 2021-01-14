// Iteration 1 Names and Input

let hacker1 = "Matthew";
let hacker2 = "Stephen";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2 Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3 Loops
let spacedName = "";
for (i = 0; i <= hacker1.length-1; i++) {
    spacedName += hacker1[i].toUpperCase() + " "
}
console.log(spacedName)

let reverseName = "";
for(i = hacker2.length-1; i >= 0; i--) {
    reverseName += hacker2[i];
}

console.log(reverseName)

for (i = 0; i < hacker1.length; i++) {
    if (hacker1 == hacker2) {
        console.log("What?! You both have the same name?")
        break;
    } else if (hacker1[i] < hacker2[i] || hacker1.length < hacker2.length) {
        console.log("The driver's name goes first")
        break;
    } else if (hacker2[i] < hacker1[i] || hacker2.length < hacker1.length) {
        console.log("Yo, the navigator's name goes first")
        break;
    }
}



// Bonus 1

let loremIpsum = "lorem et ipsum et lorem et et ipsum lorem et ipsum et lorem et et ipsum lorem et ipsum et lorem et et ipsum lorem et ipsum et lorem et et ipsum lorem et ipsum et lorem et et ipsum"
let noOfWords = 0;
let noOfEts = 0;

for(i = 0; i <= loremIpsum.length-1; i++) {
    if (loremIpsum[i] == " ") {
        noOfWords++
    } 
    if (loremIpsum[i] == "e" && loremIpsum[i+1] == "t") {
        noOfEts++
    }
}


console.log(noOfWords)
console.log(noOfEts)

// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!"

let forwardsPhrase = "";
let backwardsPhrase = "";

for(i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] == "," || phraseToCheck[i] == " " || phraseToCheck[i] == "!") {
        continue;
    } 
    forwardsPhrase += phraseToCheck[i];
}

for(i = phraseToCheck.length-1; i >= 0; i--) {
    if (phraseToCheck[i] == "," || phraseToCheck[i] == " " || phraseToCheck[i] == "!") {
        continue;
    } 
    backwardsPhrase += phraseToCheck[i];
}

forwardsPhrase = forwardsPhrase.toLowerCase()

backwardsPhrase = backwardsPhrase.toLowerCase()

if (forwardsPhrase == backwardsPhrase) {
    console.log(`${forwardsPhrase} is a palindrome!`)
} else {
    console.log(`Sorry, ${forwardsPhrase} is not a palindrome...`)
}

