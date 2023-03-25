const Employee = require("./Employee"); // import the Employee class

class Manager extends Employee { // create the Manager class that extends the Employee class
    constructor(name, id, email, officeNumber) { // create the constructor function
        super(name, id, email); // call the super function
        this.officeNumber = officeNumber; // set the office number
    }
    getRole() { // create the getRole() function
        return "Manager"; // return "Manager"
    }
    getOfficeNumber() { // create the getOfficeNumber() function
        return this.officeNumber; // return the office number
    } // end of getOfficeNumber() function
}

module.exports = Manager; // export the Manager class
