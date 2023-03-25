const intern = require("../lib/Intern");

test("Can set school via constructor", () => { // test to see if the school can be set via the constructor argument
    const testValue = "UCLA"; // set the test value to "UCLA"
    const e = new intern("Foo", 1, "test@test.com", testValue); // create a new intern object with the test value
    expect(e.school).toBe(testValue); // expect the school to be the test value
});

test("getRole() should return \"Intern\"", () => { // test to see if the getRole() function returns "Intern"
    const testValue = "Intern"; // set the test value to "Intern"
    const e = new intern("Foo", 1, "test@test.com", "UCLA"); // create a new intern object with the test value
    expect(e.getRole()).toBe(testValue); // expect the getRole() function to return the test value
});

test("Can get school via getSchool()", () => { // test to see if the getSchool() function returns the school
    const testValue = "UCLA"; // set the test value to "UCLA"
    const e = new intern("Foo", 1, "test@test.com", testValue); // create a new intern object with the test value
    expect(e.getSchool()).toBe(testValue); // expect the getSchool() function to return the test value
});
// end of tests

