class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

  
    findNode(value){

        if(this.value === undefined)
            return false;

        if(value === this.value)
            return true;

        if(value < this.value){

            if(this.leftChild){
                return this.leftChild.findNode(value);
            }
            else{
                return false;
            }
        }
        
        else{
            if(this.rightChild){
                return this.rightChild.findNode(value);
            }
            else{
                return false;
            }
        }
    }

    findCommonParent(value1, value2) {
        if (this.value === undefined)
            return null;

        if (value1 < this.value && value2 < this.value) {
            return this.leftChild ? this.leftChild.findCommonParent(value1, value2) : null;
        } else if (value1 > this.value && value2 > this.value) {
            return this.rightChild ? this.rightChild.findCommonParent(value1, value2) : null;
        } else {
            return this.value; // This is the common parent
        }
    }
}

const letters = ["H", "E", "S", "G", "L", "Y", "I"]

let bSTree = new BSNode()

letters.forEach(l => bSTree.insertNode(l))
    
//Use the following to test
console.log('Finding "H":', bSTree.findNode("H")) // should print true
console.log('Finding "G":', bSTree.findNode("G")) // should print true
console.log('Finding "Z":', bSTree.findNode("Z")) // should print false
console.log('Finding "F":', bSTree.findNode("F")) // should print false
console.log('Finding "y":', bSTree.findNode("y")) // should print false - we didn't make the tree case sensitive!



// #2
const bsTree2 = new BSNode()
const letters2 = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]    
letters2.forEach(l => bsTree2.insertNode(l))

console.log(bsTree2.findCommonParent("B", "I")) //should return "H"
bsTree2.findCommonParent("B", "G") //should return "E"
bsTree2.findCommonParent("B", "L") //should return "J"
bsTree2.findCommonParent("L", "Y") //should return "R"
bsTree2.findCommonParent("E", "H") //should return "J"