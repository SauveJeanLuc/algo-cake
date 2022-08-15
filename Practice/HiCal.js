// Given:
// See times in a day when everyone is available
// Object [startTime - endTime] 
// Integer represents nbr of 30 mins blocks past 9am


// Write: MergeRanges()

let testArray = [
    { startTime: 0,  endTime: 1 },
    { startTime: 9,  endTime: 10 },
    { startTime: 3,  endTime: 5 },
    { startTime: 10, endTime: 12 },
    { startTime: 4,  endTime: 8 }
]

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
    let newObject = {}

    testArray.forEach(element =>{
        if(!isEmpty(previousObject)){
                // current endtime is last : catch it 
            if(element === ArrayOfMeetingObjects[ArrayOfMeetingObjects.length-1]){
                newObject.startTime = previousObject.startTime;
                newObject.endTime = element.endTime;                    
                results.push(newObject);
                return;
            }
                // Check if next start-time in range of previous object Or Equal to Previous endTime
            if(element.startTime <= tempPreviousObject.endTime){
                tempPreviousObject = element;
                // If It's: Jump still holding previous-startTime 
                return;
            }else{

                // If It's not: take previous-endTime as newEndTime and previous-startTimeHolded as new StartTime
                newObject.startTime = previousObject.startTime;
                newObject.endTime = tempPreviousObject.endTime;
                results.push(newObject);
                previousObject = element;
                tempPreviousObject = element;
            }
        }else{
            previousObject = element;
            tempPreviousObject = element;
        }
    })

    return results;
}

let results = [];
MergeRanges(testArray, results);
console.log(results);