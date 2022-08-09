// runs in O(n) or O(n^1) time, as n(number of items increases)
// time of execution increases linearly
function printAllItems(items){
    items.forEach(item =>{
        console.log(item);
    })
}

let items = [1,2,3,4,5,6];

printAllItems(items);