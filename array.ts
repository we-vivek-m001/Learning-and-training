
//array of users method 1
let num : any;

num = 2;
num = "vk";
num = true;

if(typeof num === "number"){
    console.log("num");
} else if(typeof num === "boolean"){
       console.log(num);
}
type person={
    name: string;
    id: number;
}

let user :  person={
    name:"vi",
    id : 34
}

interface abc {
    name:string;
    id: number;
}

let student : abc={
    name:"fff",
    id: 334
}