const Employee = require("./Employee"); // import the Employee class

class Intern extends Employee { // create the Engineer class that extends the Employee class
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern; // export the Intern class