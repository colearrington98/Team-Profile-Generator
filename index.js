const Manager = require('./lib/Manager'); // import the Manager class
const Employee = require('./lib/Employee'); // import the Employee class
const Engineer = require('./lib/Engineer'); // import the Engineer class
const Intern = require('./lib/Intern'); // import the Intern class
const inquirer = require('inquirer'); // import the inquirer package
const fs = require('fs'); // import the fs package
const path = require('path'); // import the path package

const DIST_DIR = path.resolve(__dirname, 'dist'); // set the DIST_DIR variable to the dist folder
const distPath = path.join(DIST_DIR, 'team.html'); // set the outputPath variable to the team.html file 

const render = require('./src/templateHelper'); // import the render function from the templateHelper.js file

const teamMembers = []; // create an empty array to hold the team members
const idArray = []; // create an empty array to hold the id's

function appMenu() { // create the appMenu function to prompt the user for the team members

    function createManager() { // create the createManager function to prompt the user for the manager's information
        console.log("Please build your team"); // log the message to the console
        inquirer.prompt([ // prompt the user for the manager's information
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?",
                validate: answer => { // validate the user's input
                    if (answer !== "") { // if the answer is not an empty string
                        return true; // return true
                    }
                    return "Please enter at least one character."; // otherwise return the message
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the team manager's id?",
                validate: answer => { // validate the user's input
                    const pass = answer.match(/^[1-9]\d*$/); // set the pass variable to the user's input
                    if (pass) { // if the pass variable is true
                        return true; // return true
                    }
                    return "Please enter a positive number greater than zero."; // otherwise return the message
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's email?",
                validate: answer => { // validate the user's input
                    const pass = answer.match(/\S+@\S+\.\S+/); // set the pass variable to the user's input
                    if (pass) { // if the pass variable is true
                        return true; // return true
                    }
                    return "Please enter a valid email address."; // otherwise return the message
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the team manager's office number?",
                validate: answer => { // validate the user's input
                    const pass = answer.match(/^[1-9]\d*$/); // set the pass variable to the user's input
                    if (pass) { // if the pass variable is true
                        return true; // return true
                    }
                    return "Please enter a positive number greater than zero."; // otherwise return the message
                }
            }
        ]).then(answers => { // then take the answers from the user
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber); // create a new Manager object with the answers from the user
            teamMembers.push(manager); // push the manager object to the teamMembers array
            idArray.push(answers.managerId); // push the manager's id to the idArray
            createTeam(); // call the createTeam function
        });
    }

    function buildTeam() {
        if(!fs.existsSync(DIST_DIR)) { // if the dist folder does not exist
            fs.mkdirSync(DIST_DIR); // create the dist folder
        }
        fs.writeFileSync(distPath, render(teamMembers), "utf-8"); // write the team.html file to the dist folder
    }

    createManager(); // call the createManager function

    appMenu(); // call the appMenu function

