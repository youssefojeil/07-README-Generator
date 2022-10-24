// Include filesystem, inquirer & generate markdown packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
        validate(value) {
           return (value ? true : "Please enter you Github username")
        }
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install",
        default() {
            return "npm install"
        }
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default() {
            return "npm test"
        }
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    }
    
];

// Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log(`Success! ${fileName} was generated`);
    });
}

// Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile("README.md", response);
    })    
}

// Function call to initialize app
init();
