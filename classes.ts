class Person{
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]){
        this.name = name;
        this.age = age;
        this.hobbies= hobbies;
    }
}
const person1: Person = new Person("vinod", 12, ["reading", "painting"])

console.log(person1);