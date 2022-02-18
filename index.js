// // TODO: Include packages needed for this application
const fs = require("fs")
const generatePage = require("./src/page-template.js")
const inquirer = require("inquirer")
const { title } = require("process")

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
            message: "Please choose a license for your application from the list below. Select an answer by pressing 'Enter'",
            choices: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"]
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
questions()
// .then(answers => console.log (answers))
.then(questionsData => {
    const pageHTML = generatePage(questionsData)
    fs.writeFile("index.html", pageHTML, err => {
        if(err) throw err;

        console.log("congrats!")
    })
})

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();