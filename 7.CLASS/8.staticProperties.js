//___________________________________________________________________Introduction_______________________________________________________________________
/*
class Item {
    static count = 0;
}
console.log(Item.count);                   // 0
*/

/*
class Item {
    static count = 0;
    static getCount() {
        return Item.count;
    }
}
console.log(Item.getCount());              // 0
*/








//__________________________________________________Accessing a Static Property in a Constructor or Instance Method__________________________________________
/*
1. className.staticPropertyName
2. this.constructor.staticPropertyName
*/



class Item {
    constructor(name, quantity) {
        this.name     = name;
        this.quantity = quantity;
        this.constructor.count++;
    }
    static count = 0;
    static getCount() {
        return Item.count;
    }
}
let pen      = new Item('Pen', 5);
let notebook = new Item('Notebook', 10);
console.log(Item.getCount());                    // 2
