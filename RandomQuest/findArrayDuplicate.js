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
    // declare count to recognize if integer repeats
    var count = 0;
    // loop through the array [2 nested loops]
    // check if current item equals second item store it in the array|
    testArray.forEach(element => {

        testArray.forEach(secondElement => {

            if(element === secondElement && count > 0 && !isNumberAlreadyInArray(repeatingIntegers, element)){
                repeatingIntegers.push(element);
                count = 0;
            }

            if(element === secondElement){
                count++;
            }

        })

        count = 0;
    });

    console.log(repeatingIntegers);
}

findRepeatingInteger(testArray);

