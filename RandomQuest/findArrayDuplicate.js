//Having an array of Integers 
//Integers in range 1..n
//Length: n+1
//Find function which finds an integer appearing more than once
//in our array

let testArray = [1,2,3,4,2,4,59,3,32,9];

function isNumberAlreadyInArray(testArray, number){
    var bool = false
    testArray.forEach(element => {
        if(element === number){
            bool = true;
            return;
        }
    })
    return bool;
}

function findRepeatingInteger(testArray){
    // declare array to find repeating integers
    var repeatingIntegers = [];
    var count = 0;
    // loop through the array [2 nested loops]
    // check if current item equals second item store it in the array|
    testArray.forEach(element => {
        testArray.forEach(secondElement => {

            if(element === secondElement && count > 0 && !isNumberAlreadyInArray(repeatingIntegers, element)){
                console.log(`I reached here as ${element} to be equal to ${secondElement}`)
                repeatingIntegers.push(element);
                count = 0;
                console.log(`2nd: Current count value is ${count}`)
            }

            if(element === secondElement){
                count++;
                console.log(`1st: Current count value is ${count}`)
            }

        })
        count = 0;
        console.log(`3rd: Current count value is ${count}`)
    });

    console.log(repeatingIntegers);
}

findRepeatingInteger(testArray);

