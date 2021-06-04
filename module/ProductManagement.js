import {Product} from "./Product.js";

export class ProductManagement {
    input = [];
    total = 0;

    add(product) {
        if (product instanceof Product) {
            this.input.push(product);
        }
    }

    sold(product) {
        product.price -= product.price*(product.saleOff/100); 

        this.total += product.price;
        for(let i in this.input){
            if(this.input[i].id == product.id){
                this.input.splice(i,1);
            }
        }
    }

    totalSell() {
        console.log(this.total);
    }
}