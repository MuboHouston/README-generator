// // TODO: Include packages needed for this application
const inquirer = require("inquirer")
const { title } = require("process")

// // TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the title of your project? (Required)"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a short description explaining the what, why, and how of your project. (Required)"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)"
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and example for use. (Required)"
        },
        {
            type: "list",
            name: "license",
            message: "Please choose a license for your application from the list below. (Required)",
            choices: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"]
        },
        {
            type: "input",
            name: "contributing",
            message: "How would you like other developers to contribute to your project? (Required)"
        },
        {
            type: "input",
            name: "tests",
            message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here."
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username? (Required)"
        },
        {
            type: "input",
            name: "link",
            message: "Enter the link to your GitHub profile? (Required)"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address? (Required)"
        }
    ])
}
questions()
.then(answers => console.log (answers))

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();