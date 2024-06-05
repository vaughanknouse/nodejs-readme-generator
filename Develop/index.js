// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  { 
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  { 
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project.',
  },
  { 
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions required for your project?',
  },
  { 
    type: 'input',
    name: 'usage',
    message: 'Please provide the usage information for your project, including code examples or screenshots.',
  },
  { 
    type: 'input',
    name: 'contributing',
    message: 'Please provide the contribution guidelines for your project.',
  },
  { 
    type: 'input',
    name: 'tests',
    message: 'Please provide the instructions to run tests for your project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use for this project?',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file generated successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile('README-generated.md', markdown);
  });
}

// Function call to initialize app
init();
