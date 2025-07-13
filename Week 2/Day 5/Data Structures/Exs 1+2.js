class UniqueArray{

    arr = [];
    existsObj = {}
    size = 0;

    add(item){
        const key = this.getKey(item);
        if(!this.existsObj[key]){
            this.existsObj[key] = 1;
            this.arr[this.size] = item;
            this.size++;
        } else{
            console.log("Item already exists")
        }

    }

    getKey(item){
        if(typeof item === 'object' && item !== null){
            return JSON.stringify(item);
        }
        return item;
    }

    showAll(){
        for (let item of this.arr) {
            console.log(item);
        }
    }

    exists(item){
        const key = this.getKey(item);
        if(this.existsObj[key]){
            return true;
        }

        return false;
    }

    get(index){
        if(this.arr[index] != undefined)
            return this.arr[index];

        return false;
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
let booli = uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
