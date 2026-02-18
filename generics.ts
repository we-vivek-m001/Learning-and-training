function getValue<T>(value :T) :T{
    return value;
}

getValue<number>(54);


interface User {
  readonly id: number;
  name: string;
}

let user3: User = {
  id: 1,
  name: "Vivek"
};
//user3.id = 4; // error
console.log(user3.id);