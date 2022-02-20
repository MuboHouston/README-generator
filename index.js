// // TODO: Include packages needed for this application
const fs = require("fs")
// const generatePage = require("./src/generateMarkdown.js")
const generateMarkdown = require("./utils/generateMarkdown.js")
const inquirer = require("inquirer")

// // TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the title of your project? (Required)",
            validate: titleInput => {
                if(titleInput) {
                    return true
                } else {
                    console.log("Please enter the title of your project!")
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide a short description explaining the what, why, and how of your project. (Required)",
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true
                } else {
                    console.log("Please enter a short description!")
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? (Required)",
            validate: installationInput => {
                if(installationInput) {
                    return true
                } else {
                    console.log("Please enter the steps required to install the project!")
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and example for use. (Required)",
            validate: usageInput => {
                if(usageInput) {
                    return true
                } else {
                    console.log("Please enter the instructions and example for use!")
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Please choose a license for your application from the list below.",
            choices: ["Apache", "Eclipse", "GNU", "ISC", "MIT"]
        },
        {
            type: "input",
            name: "contributing",
            message: "How would you like other developers to contribute to your project? (Required)",
            validate: contributingInput => {
                if(contributingInput) {
                    return true
                } else {
                    console.log("Please enter how you would like other developers to contribute!")
                }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here."
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username? (Required)",
            validate: githubInput => {
                if(githubInput) {
                    return true
                } else {
                    console.log("Please enter your GitHub username!")
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address? (Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true
                } else {
                    console.log("Please enter your email address!")
                }
            }
        }
    ])
}

// TODO: Create a function to write README file
const writeToFile = questionsData => {
    const pageHTML = generateMarkdown(questionsData)
    fs.writeFile("./dist/README.md", pageHTML, err => {
        if(err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(writeToFile)
}

// Function call to initialize app
init();