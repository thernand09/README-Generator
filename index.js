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
        name: 'contents',
        message: '',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
