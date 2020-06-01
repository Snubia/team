// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee { // extending from another class
    constructor(name, id, email, officeNumber) {
        super(name, id, email); //access the function on the objects parents
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";

    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;