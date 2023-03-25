const Manager = require('./lib/Manager'); // import the Manager class
const Employee = require('./lib/Employee'); // import the Employee class
const Engineer = require('./lib/Engineer'); // import the Engineer class
const Intern = require('./lib/Intern'); // import the Intern class
const inquirer = require('inquirer'); // import the inquirer package
const fs = require('fs'); // import the fs package
const path = require('path'); // import the path package

const DIST_DIR = path.resolve(__dirname, 'dist'); // set the DIST_DIR variable to the dist folder
const distPath = path.join(DIST_DIR, 'team.html'); // set the outputPath variable to the team.html file 

