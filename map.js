const numbers = [4, 7, 9, 13, 17, 20];

function triple(numArray) {
    const newNumber = []

    for (const num of numArray) {
        const triple = num * 3;
        newNumber.push(triple)
        // console.log(newNumber);
    }
    return newNumber;
}
const newArray = triple(numbers)
// console.log(newArray);


const roll = [12, 16, 20, 39, 46, 51]

const collectRoll = roll.map(num => (num * 3));
console.log(collectRoll);

