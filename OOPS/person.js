function Person() {
    this.firstName = "";
    this.lastName = "";
    this.age=0;
    this.height="";
    this.getFullName = function(){
        return this.firstName + " " + this.lastName;
    }
};

var person1 = new Person();
person1.firstName = "P";
person1.lastName = "Jhansi";
person1.age="21";
person1.height = "5.1"

alert(person1.getFullName());
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.height);

var person2 = new Person();
person2.firstName = "Steve";
person2.lastName = "Josh";
person2.age="25"
person2.height = "6"
alert(person2.getFullName());
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.height);