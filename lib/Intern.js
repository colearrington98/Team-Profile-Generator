const Employee = require("./Employee"); // import the Employee class

class Engineer extends Employee { // create the Engineer class that extends the Employee class
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Intern; // export the Intern class