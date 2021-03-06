// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee { // extending from another class
    constructor(name, id, email, github) {
        super(name, id, email); //access the function on the objects parents
        this.github = github;
    }

    getRole() {
        return "Engineer";

    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;