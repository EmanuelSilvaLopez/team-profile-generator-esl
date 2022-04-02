const generateManager = Managers => {
  if (Managers[0]) {
    return '';
  }

  return `
  <div class="container column has-background-grey m-4">
    <div class="container box-header">
      <h2 class="title has-text-centered">Manager</h2>
    </div>
    <div class="container">
      <ul>
        <li>ID: ${id}</li>
        <li>Email:${email}</li>
        <li>Office Number:${officeNumber}</li>
      </ul>
    </div>
  </div>
  `;
};

const generateEngineer = Engineers => {
  if (Engineers[0]) {
    return '';
  }

  return `
  <div class="container column has-background-grey m-4">
    <div class="container box-header">
      <h2 class="title has-text-centered">Engineer</h2>
    </div>
    <div class="container">
      <ul>
        <li>ID: ${id}</li>
        <li>Email:${email}</li>
        <li>GitHub: ${github}</li>
      </ul>
    </div>
  </div>
  `;
};

const generateIntern = Interns => {
  if (Interns[0]) {
    return '';
  }

  return `
  <div class="container column has-background-grey m-4">
    <div class="container box-header">
      <h2 class="title has-text-centered">Intern</h2>
    </div>
    <div class="container">
      <ul>
        <li>ID: ${id}</li>
        <li>Email:${email}</li>
        <li>GitHub: ${school}</li>
      </ul>
    </div>
  </div>
  `;
};

module.exports = templateData => {
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
        ${generateEngineer()}
        ${generateIntern()}
        ${generateManager()}
      </section>
    </body>
  </html>
  
  `;
};