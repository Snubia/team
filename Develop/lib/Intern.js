// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee { // extending from another class
    constructor(name, id, email, school) {
        super(name, id, email); //access the function on the objects parents
        this.school = school;
    }

    getRole() {
        return "Intern";

    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;