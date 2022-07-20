const inquirer = require('inquirer');
const fs = require('fs');
//Inquirer - collect info - OK
//Title - OK
//description - OK
//install instrunctions - OK
//Usage Info
//Contribution Guidelines - OK
//test instructions - OK

//write info to README in proper sections - OK

//license choice
//write license and add badge

//collect and write GitHub account to Questions section - OK
//collect and write email info to questions section - OK

//table of contents clickable - ok

const genREADME = ({title, desc, install, use, license, contributers, test, github, githubLink, email, badge}) =>
`# ${title} #

## Description ##
${desc}

## Table of Contents ##
* [Description](#Description "Goto Description")
* [Installation](#installation "installation")
* [Usage Info](#Usage-Info "Usage-Info")
* [License](#License "Goto License")
* [Contribution Guidelines](#Test-Instructions "Goto est-Instructions")
* [Test Instructions](#Contribution-Guidelines "Goto Contribution-Guidelines")
* [Questions](#Questions "Goto Questions")

## Installation ##
${install}

## Usage Info ##
${use}

## License ##
${license}

## Contribution Guidelines ##
${contributers}

## Test Instructions ##
${test}

## Questions ##
Reach my GitHub Account, [${github}](${githubLink} "My GitHub")
or
Reach me by email at ${email}
`

inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Project Title?',
    },
    {
      type: 'input',
      message: 'App Description?',
      name: 'desc',
    },
    {
      type: 'input',
      message: 'Installation Instructions?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Usage Info?',
      name: 'use',
    },
    {
      type: 'list',
      message: 'License?',
      name: 'license',
      choices: ['MIT', 'Mozilla', 'IBM', 'Apache'],
    },
    {
      type: 'input',
      message: 'Contribution Guidelines?',
      name: 'contributers',
    },
    {
      type: 'input',
      message: 'Test Instructions?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'GitHub Name?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'GitHub Link?',
      name: 'githubLink',
    },
    {
      type: 'input',
      message: 'Dev Email?',
      name: 'email',
    },
])
.then((data) => {
    const content = genREADME(data);
    const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;

    fs.writeFile(filename, content, (err) => err ? console.log(err) : console.log('Success!')
    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    );
  });
