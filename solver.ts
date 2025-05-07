

function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true) {
        return input.toUpperCase()
    }
    if (toUpper === false) {
        return input.toLocaleLowerCase()
    }
    return input.toUpperCase()

}





function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filteredObj = items.filter(item => item.rating >= 4);
    return filteredObj;
}





function concatenateArrays<T>(...arrays: T[][]): T[] {
    const len = arrays.length;
    const totalArray = []
    for (let i = 0; i < len; i++) {
        totalArray.push(...arrays[i])
    }
    return totalArray;
}




class Vehicle {
    make: string;
    year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year
    }

    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}




class Car extends Vehicle {
    model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`
    }
}



const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo())
// console.log(myCar.getModel())

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    }
    return value * 2;
}




interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products) {
        const priceArray = products.map(p => p.price);
        const max = Math.max(...priceArray)
        const expensiveOne = products.find(item => item.price == max)
        return expensiveOne || null
    }
    return null
}




enum Day {
    Monday = "weekday",
    Tuesday  = "weekday",
    Wednesday  = "weekday",
    Thursday  = "weekday",
    Friday  = "weekday",
    Saturday  = "weekend",
    Sunday   = "weekend",
  }
  
  function getDayType(day: Day): string{
    return day;
  }

//   console.log(getDayType(Day.Sunday))

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                throw new Error("Negative number not allowed")
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}

// squareAsync(4).then(console.log); 
// squareAsync(-3).catch(console.error);