const generateTeam = team => { // This function will generate the HTML for the team page based on the user's input from the command line prompts in the app.js file 

const generateManager = manager => { // This function will generate the HTML for the manager card on the team page 

return ` 
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
`;

}

const generateEngineer = engineer => {  // This function will generate the HTML for the engineer card on the team page

return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="=${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>

`;

}

const generateIntern = intern => { // This function will generate the HTML for the intern card on the team page

return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
`;

}

const html = []; // This array will hold the HTML for the team page

html.push(team // This will push the HTML for the manager card to the array

.filter(employee => employee.getRole() === "Manager") // This will filter the team array to only include the manager

.map(manager => generateManager(manager)) // This will map the manager card HTML to the array

); // This will end the push to the array

html.push(team // This will push the HTML for the engineer cards to the array

.filter(employee => employee.getRole() === "Engineer") // This will filter the team array to only include the engineers

.map(engineer => generateEngineer(engineer)) // This will map the engineer cards HTML to the array

.join("") // This will join the HTML for the engineer cards into a single string

); // This will end the push to the array

html.push(team // This will push the HTML for the intern cards to the array

.filter(employee => employee.getRole() === "Intern") // This will filter the team array to only include the interns

.map(intern => generateIntern(intern)) // This will map the intern cards HTML to the array

.join("") // This will join the HTML for the intern cards into a single string
);

return html.join(""); // This will join the HTML for the manager, engineer, and intern cards into a single string

};

module.exports = team => { // This will export the generateTeam function

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
        
    </html>
    `;
}; // This will end the export of the generateTeam function