const Employee = require("./Employee"); // import the Employee class

class Intern extends Employee { // create the Engineer class that extends the Employee class
    constructor(name, id, email, school) { // create the constructor function
        super(name, id, email);
        this.school = school;
    }
    getRole() { // create the getRole() function
        return "Intern"; 
    }
    getSchool() { // create the getSchool() function
        return this.school;
    }
}

module.exports = Intern; // export the Intern class