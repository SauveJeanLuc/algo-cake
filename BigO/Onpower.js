// Function to print all possible pairs 
// in an array
// Time complexity is O(n^2) as we are using 2 loops


let specifiedArray = [1,2,5,6,7];

for(var i = 0; i < specifiedArray.length; i++){
    for(var j= 0; j < specifiedArray.length; j++){
        console.log(`(${specifiedArray[i]},${specifiedArray[j]})`);
    }
}
