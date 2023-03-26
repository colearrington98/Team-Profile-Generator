const Employee = require("./Employee"); // import the Employee class

class Engineer extends Employee { // create the Engineer class that extends the Employee class
    constructor(name, id, email, github) { // create the constructor function
        super(name, id, email); 
        this.github = github;
    }
    getRole() { // create the getRole() function
        return "Engineer";
    }
    getGithub() { // create the getGithub() function
        return this.github;
    }
} 

module.exports = Engineer; // export the Engineer class