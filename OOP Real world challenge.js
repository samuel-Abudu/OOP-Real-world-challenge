class Employee {
	constructor(firstName, lastName, pay) {
	this._firstName = firstName;
	this._lastName = lastName;
	this._pay = pay;
	}
	getfullName() {
		return `${this._firstName} ${this._lastName}`;
	}
	getapplyRaise() {
	  let raiseAmount = 1.8
	  return this._pay * raiseAmount;	 
	}
}
class Manager extends Employee {
  	constructor(firstName, lastName, pay){
  	  super(firstName, lastName, pay);
  	  this._managedEmployees = [];
	}
	getfullName() {
	  return `${this._firstName} ${this._lastName}`;
	}
	getapplyRaise() {
	  let raiseAmount=2
	  return this._pay * raiseAmount ;	 
	}
}
const emp1=new Employee("foo", "bar", 1000)
// console.log(emp1)
// emp1.getfullName()
emp1.getapplyRaise()
const man =new Manager("jane", "doe", 2000)
man.getapplyRaise()