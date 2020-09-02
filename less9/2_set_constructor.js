function Person(name) {  
    // this = {}
    this.name = name;
    // return this
}  

Person.prototype.copy = function() {  
    return new this.constructor(this.name);
};  

Person.prototype.getName = function() {  
    return this.name;
};  


function Student(name) {  
    Person.call(this, name);
}  

console.log('Student.prototype', Student.prototype);
console.log('Person.prototype', Person.prototype);


Student.prototype = Object.create(Person.prototype);

console.log('Student.prototype2', Student.prototype.constructor);

Student.prototype.constructor = Student;

console.log('Student.prototype3', Student.prototype.constructor);
var student1 = new Student("trinth");  
var student2 = new Student("Vasyl");  


console.log(student1 instanceof Student);


