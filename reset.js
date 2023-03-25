// Description: Resets the index.html file to the default one provided by the homework assignment.//
const fs = require('fs'); // import the fs package
if (fs.existsSync('./dist/index.html')) { // if the index.html file exists in the dist folder 
    fs.unlinkSync('./dist/index.html'); // delete the index.html file from the dist folder 
    console.log('index.html reset'); // log the message to the console 
} 
