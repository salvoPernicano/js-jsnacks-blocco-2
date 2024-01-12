const arrayAnimali = ["Elefante", "Leone", "Tigre", "Giraffa", "Orso"];
const arrayCibo = ["Pizza", "Pasta", "Insalata", "Sushi", "Hamburger", "Frutta", "Gelato"];
let newElement;
for (let i=0; i < arrayCibo.length; i++){
    if (arrayAnimali.length < arrayCibo.length){
        newElement = prompt("che animali ti piacciono?")
        arrayAnimali.push(newElement)
    }
}
console.log(arrayAnimali, arrayCibo);


