// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  let licenseBadge = ''
  if(!license) {
    return "";
  } else {
  switch (license){
    case 'Apache':
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    case 'Eclipse':
      licenseBadge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
      break;
    case 'GNU':
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case 'ISC':
      licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]"
      break;
    case 'MIT':
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      break;
  }
  return licenseBadge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if(!license) {
    return "";
  } else{
  let licenseLink = ''
    switch (license){
      case 'Apache':
        licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
        break;
      case 'Eclipse':
        licenseLink = "(https://opensource.org/licenses/EPL-1.0)";
        break;
      case 'GNU':
        licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case 'ISC':
        licenseLink = "(https://opensource.org/licenses/ISC)"
        break;
      case 'MIT':
        licenseLink = "(https://opensource.org/licenses/MIT)"
        break;
    }
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ##Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}
  
  ## License 
  This project is licensed under ${data.license}
  
  ## Contributing 
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions
  Find me on GitHub: https://github.com/${data.github}

  If you have any questions about this projects, please contact me directly at: ${data.email}
`;
}

module.exports = generateMarkdown;
