const numeri = [];
userNum = parseInt(prompt("give me a number"));
numeri.push(userNum);

for (let i = 0; i < numeri.length; i++){
    if (userNum % 2 === 0){
        console.log(userNum);
    } else {
        userNum += 1;
        console.log(userNum);
    }
}