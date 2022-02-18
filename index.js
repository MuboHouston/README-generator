// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

var commandLineArgs = process.argv;
var readMeDataArgs = process.argv.slice(2, process.argv.length);

const printReadMeData = readMeDataArr => {
    readMeDataArr.forEach(readMeItem =>console.log(readMeItem));
};

printReadMeData(readMeDataArgs);