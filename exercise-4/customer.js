"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, Age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName + " " + this.getAge() + " years old");
    };
    Customer.prototype.getAge = function () {
        return 29;
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("John", "Smith", 29);
customer.greeter();
