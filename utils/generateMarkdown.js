// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
   switch (license) {
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]';
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
   case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
   default:
    return '';
    } 
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
    switch (license) {
      case 'MIT License':
        return '[MIT License](https://opensource.org/licenses/MIT)';
      case 'Apache License 2.0':
        return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
      case 'Mozilla Public Lincense 2.0':
        return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
      default:
        return '';
    }
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License 
    
    This project is licensed under the ${renderLicenseLink(license)} license.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation-Instructions)
  * [Usage Instructions](#Usage-Instructions)
  * [License](#License)
  * [Contributing Members](#Contributing-Members)
  * [Testing](#Testing)    
  * [Emai](#Email)
  
  ## Description
  ${data.Description}

  ## Installation Instructions
  ${data.Installation}

  ## Usage Instructions
  ${data.Usage}

  ## License
  ${renderLicenseBadge(data.license)}
  
  ## Conttributing Member
  ${data.Contributors}

  ## Testing
  ${data.Test}

  ## GitHub Profile
  [GitHub Profile(https://github.com/${data.GitHub})]
  
  ## Email
  ${data.Email}
  `;
}

module.exports = generateMarkdown;
