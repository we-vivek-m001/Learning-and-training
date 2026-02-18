class Persons{
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]){
        this.name = name;
        this.age = age;
        this.hobbies= hobbies;
    }
}
const person1: Persons = new Persons("vinod", 12, ["reading", "painting"])

class Students extends Persons{
    grade:number;
    constructor(name: string, age: number, hobbies: string[],grade: number){
       super(name, age, hobbies);
        this.grade = grade;

    }
}

const student1: Students = new Students("Vivek", 23, ["reading", "playing"], 9);
