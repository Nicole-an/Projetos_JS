alert('Hello word, welcome to the number secret game!');
let kick = prompt('Choice a number bettewen 1 and 50');
console.log ('Kick ', kick);

let secretNumber = 33;

console.log ('Result ', kick == secretNumber);

if (secretNumber == kick) {
    alert (`YES! You descover the secret number ${secretNumber}`);
} else {
    console.log ('Secret number ', secretNumber);
    alert ('Not yet :(')
}
