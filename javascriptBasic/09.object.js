var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  greeting: function() {
    console.log(`Hi my name is ${this.firstName} ${this.lastName}`)
  }
};

var p = person;
p.greeting();


var kid = {
  firstName: "Martin",
  lastName: "Joe",
  age: 12,
  eyeColor: "blue",
  greeting: sayHi
};

function sayHi() {
  console.log(`Hi my name is ${this.firstName} ${this.lastName}`)
}

var p = kid;
p.greeting();
