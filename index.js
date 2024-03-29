const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      },
      {
        type: "input",
        name: "title",
        message: "What is the project's title?"
      },
      {
        type: "input",
        name: "description",
        message: "Write a description of the project"
      },
      {
        type: "input",
        name: "installation",
        message: "How do you install dependencies?",
        default: "npm i"
      },
      {
        type: "input",
        name: "usage",
        message: "How do you use the repo?",
      },
      {
        type: "list",
        name: "license",
        message: "Choose licenses for the project",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
        type: "input",
        name: "contributing",
        message: "How can others contribute to the project?",
      },
      {
        type: "input",
        name: "tests",
        message: "How do you run the test?",
        default: "npm test"
      },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);  
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
  const readmeContent = generateMarkdown(answers);
  writeToFile("README.md", readmeContent);
})
}

// function call to initialize program
init();
