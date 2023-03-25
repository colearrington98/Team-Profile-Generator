const Manager = require('./lib/Manager'); // import the Manager class
const Engineer = require('./lib/Engineer'); // import the Engineer class
const Intern = require('./lib/Intern'); // import the Intern class
const inquirer = require('inquirer'); // import the inquirer package
const fs = require('fs'); // import the fs package
const path = require('path'); // import the path package

const DIST_DIR = path.resolve(__dirname, 'dist'); // set the DIST_DIR variable to the dist folder
const distPath = path.join(DIST_DIR, 'index.html'); // set the outputPath variable to the team.html file 

const render = require('./src/templateHelper'); // import the render function from the templateHelper.js file

const teamMembers = []; // create an empty array to hold the team members
const idArray = []; // create an empty array to hold the id's

console.log ("Welcome to the Team Profile Generator!"); // log the message to the console

function appMenu () { // create the appMenu function
    function createManager() { // create the createManager function
        console.log("Please build your team"); // log the message to the console
        inquirer.prompt([ // prompt the user for the manager's information
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the team manager's id? (Required)",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's id!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's email? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the team manager's office number? (Required)",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return "Please enter a positive number greater than zero";
                }
            }
        ]).then(answers => { // then create a new Manager object with the answers
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager); // push the manager object to the teamMembers array
            idArray.push(answers.managerId); // push the manager id to the idArray array
            createTeam(); // call the createTeam function
        });
    } // end of createManager function

    function createTeam() { // create the createTeam function
        inquirer.prompt([ // prompt the user for the team member's information
            {
                type: 'list',
                name: 'memberChoice',
                message: "Which type of team member would you like to add?",
                choices: ['Engineer', 'Intern', 'I do not want to add any more team members']
            }
        ]).then(userChoice => { // then create a switch statement based on the user's choice
            switch (userChoice.memberChoice) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        });
    } // end of createTeam function

    function addEngineer() { // create the addEngineer function
        inquirer.prompt([ // prompt the user for the engineer's information
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's id? (Required)",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's id!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's GitHub username? (Required)",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's GitHub username!");
                        return false;
                    }
                }
            }
        ]).then(answers => { // then create a new Engineer object with the answers
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer); // push the engineer object to the teamMembers array
            idArray.push(answers.engineerId); // push the engineer id to the idArray array
            createTeam(); // call the createTeam function
        });
    } // end of addEngineer function

    function addIntern() { // create the addIntern function
        inquirer.prompt([ // prompt the user for the intern's information
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's id? (Required)",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's id!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is the intern's school? (Required)",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school!");
                        return false;
                    }
                }
            }
        ]).then(answers => { // then create a new Intern object with the answers
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern); // push the intern object to the teamMembers array
            idArray.push(answers.internId); // push the intern id to the idArray array
            createTeam(); // call the createTeam function
        });
    } // end of addIntern function

    function buildTeam() { // create the buildTeam function
        if (!fs.existsSync(DIST_DIR)) { // if the dist directory does not exist
            fs.mkdirSync(DIST_DIR); // create the dist directory
        }
    fs.writeFileSync(distPath, render(teamMembers), "utf-8"); // write the file to the dist directory
    } // end of buildTeam function

    createManager(); // call the createManager function

}

appMenu();



