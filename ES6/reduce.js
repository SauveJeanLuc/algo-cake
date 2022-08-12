const message = ["Keep", "The", "Fun"];

//function to join string elements
let joinStrings = (accumulator, currentValue) => {
    return `Accumulator now is ${accumulator} and current value is ${currentValue}`;
}

let joinedString = message.reduce(joinStrings,0);
console.log(joinedString);
