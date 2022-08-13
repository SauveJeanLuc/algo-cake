// Function to check if binary tree is superbalanced

class BinaryTreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value){
        this.left = new BinaryTreeNode(value);
        return this.left;;
    }

    insertRight(value){
        this.right = new BinaryTreeNode(value);
        return this.right
    }

    getLeft(){
        return this.left;
    }

    getRight(){
        return this.right;
    }
}

const isLeafNode = (node) =>{
    if(node!=null && node.left === null && node.right === null)
        return true;
    return false;
}

function traverseNode(head, depth, depthArray){
    const temp = head;
    if(isLeafNode(temp)){
        depthArray.push(depth);
        return;
    }
    if(temp.getRight()!=null){
        traverseNode(temp.getRight(), depth+1, depthArray);
    }
    if(temp.getLeft()!=null){
        traverseNode(temp.getLeft(), depth+1, depthArray);
    }
}

function subtractIsBig(num1, num2){
    if(num1 > num2){
        return num1 - num2;
    }
    else{
        return num2 - num1;
    }
}

function checkIfDifferenceIsLessThanTwo(depthArray){
    var bool = true;
    // console.log("Going to perform some operations")
    depthArray.forEach(item => {
        depthArray.forEach(secondItem => {
            // console.log(`${item} - ${secondItem} = ${subtractIsBig(item,secondItem)}`);
            if(subtractIsBig(item, secondItem) > 1){
                bool = false;
                return;
            }
        })
    } )
    return bool;
}

function isBinaryTreeSuperBalanced(head){
    const depthArray = [];
    const depth = 0;

    traverseNode(head, depth ,depthArray);
    return checkIfDifferenceIsLessThanTwo(depthArray);
}

// Testing with a tree

const head = new BinaryTreeNode(8);
const left = head.insertLeft(7);
left.insertLeft(2);
left.insertRight(3);


const right = head.insertRight(9);                    
right.insertLeft(4);
right.insertRight(12);


// console.log(head.value);
// console.log(head.getLeft().value);
// console.log(head.getRight().value);

// isLeafNode function
// findDepth of leaf node
// Put the depths in an array
// Traverse in all pairs finding if there's one
// with difference more than 1
console.log(isBinaryTreeSuperBalanced(head))




