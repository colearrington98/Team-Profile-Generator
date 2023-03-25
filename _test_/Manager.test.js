const Manager = require('../lib/Manager'); // import the Manager class
const Employee = require('../lib/Employee'); // import the Employee class

test("Can set office number via constructor argument", () => { // test to see if the office number can be set via the constructor argument
    const testValue = 100; // set the test value to 100
    const e = new Manager("Foo", 1, "test@test.com", testValue); // create a new Manager object with the test value
    expect(e.officeNumber).toBe(testValue); // expect the office number to be the test value
});

test("getRole() should return \"Manager\"", () => { // test to see if the getRole() function returns "Manager"
    const testValue = "Manager"; // set the test value to "Manager"
    const e = new Manager("Foo", 1, "tests@test.com", testValue); // create a new Manager object with the test value
    expect(e.getRole()).toBe(testValue); // expect the getRole() function to return the test value
});

test("Can get office number via getOffice()", () => { // test to see if the getOffice() function returns the office number
    const testValue = 100; // set the test value to 100
    const e = new Manager("Foo", 1, "tests@test.com ", testValue); // create a new Manager object with the test value
    expect(e.getOfficeNumber()).toBe(testValue); // expect the getOffice() function to return the test value
}); // end of tests


