// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//Requires the generateMarkdown in file
const generateMarkdown = require('./utils/generateMarkdown');
//Calls file system
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a brief description of your project:',   
    },
    {
        type: 'checkbox',
        name: 'tableOfContents',
        choices: ['Title', 'Description', 'Installation', 'Usage', 'License', 'Contributors', 'Test','GitHub Username', 'Email Adress'],
        message: 'Select contents that you would like to add to your table of contents',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What is a required installation for this application?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide the usage instructions',
    },
    {
        type: 'list',
        name: 'License',
        choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0','None'],
        message: 'Select the type of license',
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Provide the names of the contributor memebers',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Provide testing instructions',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileNmae, data)
};

// TODO: Create a function to initialize app
function init() {
    //This will initiate questions object prompt
    inquirer.prompt(questions)
    //This will write file to READMEGENERATOR.md
    .then((data)=> writeToFile('READMEGENERATOR.md', generateMarkdown(data)))
    //If no error succesfule command in logged
    .then(()=> console.log('README successfully written!'))
    //If there is errors this will print in the command line
    .catch((err) => console.log(err))
};

// Function call to initialize app
init();
