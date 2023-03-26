class Employee { // create the Employee class
    constructor(name, id, email) { // create the constructor function
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() { // create the getName() function
        return this.name;
    }
    getId() { // create the getId() function
        return this.id;
    }
    getEmail() { // create the getEmail() function
        return this.email;
    }
    getRole() { // create the getRole() function
        return "Employee";
    }
}

module.exports = Employee; // export the Employee class