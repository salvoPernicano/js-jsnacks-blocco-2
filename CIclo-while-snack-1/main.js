
const myNums = [];
let somma = 0;

while (somma < 50) {

    let randomN = parseInt(prompt("give me a number"));
    myNums.push(randomN);
    somma = myNums.reduce((accumulator, currentValue) => {
   return accumulator + currentValue
},0);
}



console.log(somma)