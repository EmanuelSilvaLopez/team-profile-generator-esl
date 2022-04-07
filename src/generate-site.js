

const generateTeam = (team) => {
  console.log(team);

  const html = [];

  const generateManager = manager => {
    let managerHTML = `
    <div class="box column has-background-info-light m-4">
      <div class="container box-header">
        <h2 class="title has-text-centered">Ⓜ️Manager</h2>
      </div>
      <div class="container has-text-weight-semibold">
        <ul>
          <li>ID: <span class="has-text-weight-normal">${manager.id}</span></li>
          <li>Email: <span class="has-text-weight-normal">${manager.email}</span></li>
          <li>Office Number: <span class="has-text-weight-normal">${manager.officeNumber}</span></li>
        </ul>
      </div>
    </div>
    `;
    html.push(managerHTML)
  }

  const generateEngineer = engineer => {
    let engineerHTML = `
    <div class="box column has-background-info-light m-4">
      <div class="container box-header">
        <h2 class="title has-text-centered">🔬Engineer</h2>
      </div>
      <div class="container has-text-weight-semibold">
        <ul>
          <li>ID: <span class="has-text-weight-normal">${engineer.id}</span></li>
          <li>Email: <span class="has-text-weight-normal">${engineer.email}</span></li>
          <li>GitHub: <span class="has-text-weight-normal">${engineer.github}</span></li>
        </ul>
      </div>
    </div>
    `;
    html.push(engineerHTML)
  }
  
  const generateIntern = intern => {
    let internHTML = `
    <div class="box column has-background-info-light m-4">
      <div class="container box-header">
        <h2 class="title has-text-centered">🏫Intern</h2>
      </div>
      <div class="container has-text-weight-semibold">
        <ul>
          <li>ID: <span class="has-text-weight-normal">${intern.id}</span></li>
          <li>Email: <span class="has-text-weight-normal">${intern.email}</span></li>
          <li>GitHub: <span class="has-text-weight-normal">${intern.school}</span></li>
        </ul>
      </div>
    </div>
    `;
    html.push(internHTML)
  }
  
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === 'Manager') {
      generateManager(team[i]);
    }
    if (team[i].getRole() === 'Engineer') {
      generateEngineer(team[i]);
    }
    if (team[i].getRole() === 'Intern') {
      generateIntern(team[i]);
    }
  }
  
  return html.join('');
}



module.exports = team => {
  // destructure page data by section

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Team Profiles</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    </head>
    <body>
      <section class="hero is-info has-text-centered">
        <div class="hero-body">
          <h1 class="title is-1">
            My Team!
          </h1>
        </div>
      </section>
  
      <section class="section columns box-container">
      ${generateTeam(team)}
      </section>
    </body>
  </html>
  
  `;
};