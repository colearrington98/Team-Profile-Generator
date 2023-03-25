const Engineer = require("../lib/Engineer"); // import the Engineer class

test("Can set GitHub account via constructor", () => { // test to see if the GitHub account can be set via the constructor argument
    const testValue = "GitHubUser"; // set the test value to "GitHubUser"
    const e = new Engineer("Foo", 1, "test@test.com", testValue); // create a new Engineer object with the test value
    expect(e.github).toBe(testValue); // expect the GitHub account to be the test value
}); 

test( "getRole() should return \"Engineer\"", () => { // test to see if the getRole() function returns "Engineer"
    const testValue = "Engineer"; // set the test value to "Engineer"
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser"); // create a new Engineer object with the test value
    expect(e.getRole()).toBe(testValue); // expect the getRole() function to return the test value
});

test("Can get GitHub username via getGithub()", () => { // test to see if the getGithub() function returns the GitHub account
    const testValue = "GitHubUser"; // set the test value to "GitHubUser"
    const e = new Engineer("Foo", 1, "test@test.com", testValue); // create a new Engineer object with the test value
    expect(e.getGithub()).toBe(testValue); // expect the getGithub() function to return the test value
});
// end of tests
