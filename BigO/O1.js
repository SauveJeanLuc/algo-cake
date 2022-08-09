// Function runs in o(1) time relative to the input
function printFirstItem(items) {
    console.log(items[0]);
}

console.time('firstAttempt');

let items = [5];
// Requires one step regardless of input size
printFirstItem(items);

console.timeEnd('firstAttempt');


console.time('secondAttempt');

let secondItems = [5,3,41,132,1,23123,123,123,123,23];
// Requires one step regardless of input size
printFirstItem(secondItems);

console.timeEnd('secondAttempt');