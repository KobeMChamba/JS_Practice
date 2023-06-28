const user = {
    name: "Max",
    age: 34,
    greet() {
        console.log("Hello!")
        console.log(this.age)
    }
};

console.log(user.name)
user.greet();

// Can create blueprints with classes
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

greet() {
    console.log("Hi!");
    }
}

const user1 = new User("Manuel", 35);
console.log(user1);
user1.greet();

