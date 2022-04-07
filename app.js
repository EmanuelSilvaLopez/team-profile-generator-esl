const inquirer = require('inquirer');
const generateSite = require('./src/generate-site');
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");


let teamArray = []

const promptMenu = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Which type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'Manager', 'build my team!']
    }
  ])
  .then(userChoice => {
    switch (userChoice.menu) {
      case 'Engineer':
        promptEngineer();
        break;
      case 'Intern':
        promptIntern();
        break;
      case 'Manager':
        promptManager();
        break;
      case 'build my team!':
        buildTeam();
    }
  })
}

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter team members name. (required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You forgot to enter a name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter team members id',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter team members email'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter github username'
    }
  ]).then(answers => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamArray.push(engineer);
    promptMenu();
  })
}

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter team members name. (required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You forgot to enter a name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter team members id',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter team members email'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter office number'
    }
  ]).then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamArray.push(manager);
    promptMenu();
  })
}

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter team members name. (required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You forgot to enter a name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter team members id',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter team members email'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter school'
    }
  ]).then(answers => {
    console.log(answers);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamArray.push(intern);
    promptMenu();
  })
}



const buildTeam = () => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, generateSite(teamArray), "utf-8")
};

promptMenu();
