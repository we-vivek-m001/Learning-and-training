interface User{
    id: number;
    name: string;
    age? : number; //optional: we can add properties optional by using "?"
}

const user: User = {
    id:1,
    name: "vivek"
    
};


const user1: User={
    id:2,
    name: "mishra",
    age: 24
}
console.log(user1.age);


let id: number|string;
id = 23;
id = "fg";
console.log(id);
console.log(user1.name);


type customer = {
    name: string;
    age: number;
}

let person: customer = {
    name:"vivek",
    age: 23
}


interface organisation {
    id:number|string;
    age:number;
    name: string;
}

interface member extends organisation{ //we are extending the property by using extends keyword
    role: string;
}

const admin : member = {
    id:34,
    age:18,
    name: "Abhi",
    role :"intern"
}


