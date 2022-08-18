// Given:
// See times in a day when everyone is available
// Object [startTime - endTime] 
// Integer represents nbr of 30 mins blocks past 9am


// Write: MergeRanges()

 //1: 30mins after 9:00 am 9:30 am
// let testArray = [
//     { startTime: 0,  endTime: 1 },
//     { startTime: 9,  endTime: 10 },
//     { startTime: 3,  endTime: 5 },
//     { startTime: 10, endTime: 12 },
//     { startTime: 4,  endTime: 8 }
// ]

let secondTestArray = [
        { startTime: 1, endTime: 10 },
        { startTime: 2, endTime: 6 },
        { startTime: 3, endTime: 5 },
        { startTime: 7, endTime: 9 },
]

// Sorting 

// let sortedArray =[
//     { startTime: 0,  endTime: 1 }, 
//     { startTime: 3,  endTime: 5 }, //previousObject 
//     { startTime: 4,  endTime: 8 }, 
//     { startTime: 7,  endTime: 10 }, //temp
//     { startTime: 10, endTime: 12 },
// ]

//  To return

// let objectToReturn = [
//     { startTime: 0,  endTime: 1 }, 
//     { startTime: 3,  endTime: 8 },
//     { startTime: 9,  endTime: 12 },
// ]


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function MergeRanges(ArrayOfMeetingObjects ,results){
    // Create Array To Hold results
    // let results = [];
    // Sort Existing Array according to startTimes
    ArrayOfMeetingObjects.sort((a,b) => {
        return a.startTime - b.startTime;
    })
    let previousObject = {};
    let tempPreviousObject = {};


    // Space Complexity O(n)

    ArrayOfMeetingObjects.forEach(element =>{
        if(!isEmpty(previousObject)){
                // current endtime is last : catch it 
            if(element === ArrayOfMeetingObjects[ArrayOfMeetingObjects.length-1]){
                console.log(`Reached Here 3`);
                let newObject = {}
                newObject.startTime = previousObject.startTime;
                if(element.endTime > previousObject.endTime) {
                    newObject.endTime = element.endTime;          
                }
                else{
                    newObject.endTime = previousObject.endTime;
                }
                results.push(newObject);
                return;
            }
                // Check if next start-time in range of previous object Or Equal to Previous endTime
            if(element.startTime <= tempPreviousObject.endTime){
                console.log(`Reached Here 1`);
                tempPreviousObject = element;
                // If It's: Jump still holding previous-startTime 
                return;
            }
            
            else{
                let newObject = {};
                console.log(`Reached Here 2`);
                // If It's not: take previous-endTime as newEndTime and previous-startTimeHolded as new StartTime
                newObject.startTime = previousObject.startTime;
                newObject.endTime = tempPreviousObject.endTime;

                if(element.endTime > tempPreviousObject.endTime) {
                    newObject.endTime = element.endTime;          
                }
                else{
                    newObject.endTime = previousObject.endTime;
                }

                results.push(newObject);  // 
                previousObject = element;
                tempPreviousObject = element;
            }
        }else{
            previousObject = element;
            tempPreviousObject = element;
        }
    })
    //a = b
    //b = a

    return results;
}

let results = [];
MergeRanges(secondTestArray, results);
console.log(results);