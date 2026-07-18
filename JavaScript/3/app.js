class rec{
    constructor(length,width){
        this.length = length;
        this.width = width;
    }

    findArea(){
        return this.length * this.width;
    }
}

const rect = new rec(10,5);
console.log("Area of Rectangle:",rect.findArea());