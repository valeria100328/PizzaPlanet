export class Pizza {
    _id: any;
    name: string;
    size: string;
    adition: string;
    price: number;

    constructor(name: string, size: string, adition: string, price: number) {
        this.name = name;
        this.size = size;
        this.adition = adition;
        this.price = price;
    }

}
