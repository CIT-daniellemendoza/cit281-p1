/*
    CIT 281 Project 1
    Name: Danielle Mendoza
    
*/

// Function given by Phil: Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz"

let word = ""

for (let i = 0; i <= getRandomInteger(5, 26); i++) {
    let num = getRandomInteger(0,27)
    word += alphabet[num]
}

console.log(word)

