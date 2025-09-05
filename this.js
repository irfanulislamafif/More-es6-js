class Vehicle{
    #tin;
    constructor(type,brand, price){
        this.type = type;
        this.price = price;
        this.brand = brand
        this.#tin ='123ds2'

    }
    getTin(){
        return this.#tin
    }
    getThis(){
        console.log(this);
    }
    getPrice(){
        return this.price
    }
}
const car1 = new Vehicle('car','Honda', 5000000)
const car2 = new Vehicle('car', 'Toyota', 4000000)
car1.getThis()
console.log(car2.getPrice());
console.log(car1.getPrice());

const student = {
    name: "Rahul Dravid",
    score: 1000,
    getScore: function(){
        console.log(this)
    },
    getScoreArrow: () => {
        console.log(this);
    }
}

student.getScore()
student.getScoreArrow()
console.log('ultimate this', this);
console.log(car1.price)