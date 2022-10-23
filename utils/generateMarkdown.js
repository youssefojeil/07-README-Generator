// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "MIT";
    
    case "APACHE 2.0":
      return "APACHE 2.0";  
    
    case "GPL 3.0":
      return "GPL 3.0";
    
    case "BSD 3":
      return "BSD 3";  

    case "None":
      return "";      
  
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    
    case "APACHE 2.0":
      return "https://opensource.org/licenses/Apache-2.0";  
    
    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";  

    case "None":
      return "";      
  
    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";  
    
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";  

    case "None":
      return "";      
  
    default:
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseSection(data.license)}
  # ${data.title}
  ## Description
  ${data.description}
## Table Of Contents
<li><a href="#installation">Installation</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#license">License</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#tests">Tests</a></li>
<li><a href="#questions">Questions</a></li>
## Installation
To install necessary dependencies, run the following command:
${data.install}
## Usage
${data.usage}
## License
This project is licensed under the ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
If you have any feedback on what we can add to our application or any issues that you have run into, please feel free to reach out at my github https://github.com/${data.username} or by email at ${data.email}.
`;
}

module.exports = generateMarkdown;
