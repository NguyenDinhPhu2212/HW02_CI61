export class Product {
    constructor(id,name,price,factory,saleOff,date) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.factory = factory;
        this.saleOff = saleOff;
        this.date = new Date(date).toUTCString();;
    }
}

export class Household extends Product {
    constructor(id,name,price,factory,saleOff,date,durability) {
        super(id,name,price,factory,saleOff,date);
        this.durability = durability;
    }
}

export class Clothes extends Product {
    constructor(id,name,price,factory,saleOff,date,origin,material) {
        super(id,name,price,factory,saleOff,date);
        this.origin = origin;
        this.material = material;
    }
}

export class Food extends Product {
    constructor(id,name,price,factory,saleOff,date,taste) {
        super(id,name,price,factory,saleOff,date);
        this.taste = taste;
    }
}