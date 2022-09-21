var Persone = function () {}; //ES5

const p = new Persone(); //Nesne Object

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(this.name, this.age);
  }

  calculateAge() {
    return new Date().getFullYear() - this.age;
  }
  greeting(text) {
    return `${text}, My Name Is ${this.name}`;
  }
} //ES6
class Student extends Person {
  
}

const p1 = new Person("Yasin", 24);
console.log(p1.calculateAge() + " " + p1.greeting("Hello"));

const p2 = new Student("Yasin", 24);
console.log(p2.calculateAge() + " " + p2.greeting("Hello"));

