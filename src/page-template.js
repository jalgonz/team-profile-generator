  
let  teamCards= [];

function employeeHTML(team) {
  let employee;
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      employee = `
            <div class="container column is-one-fifth">
                <div class="card">
                    <div class="card-content">
                        <p class="title is-centered">
                            ${team[i].name}
                        </p>
                        <p class="subtitle">
                            <i class=""></i>
                            ${team[i].getRole()}
                        </p>
                    </div>
                    <div class="card-content">
                        <div class="box">
                            ID: ${team[i].id}
                        </div>
                        <div class="box">
                            Email: ${team[i].email}
                        </div>
                        <div class="box">
                            Office Number: ${team[i].officeNumber}
                        </div>
                    </div>
                </div> 
            </div>`;

      teamCards.push(employee);
    } else if (team[i].getRole() === "Engineer") {
      employee = `
            <div class="container column is-one-fifth">
                <div class="card">
                    <div class="card-content">
                        <p class="title is-centered">
                            ${team[i].name}
                        </p>
                        <p class="subtitle">
                            <i class=""></i>
                            ${team[i].getRole()}
                        </p>
                    </div>
                    <div class="card-content">
                        <div class="box">
                            ID: ${team[i].id}
                        </div>
                        <div class="box">
                            Email: ${team[i].email}
                        </div>
                        <div class="box">
                            GitHub: ${team[i].gitHub}
                        </div>
                    </div>
                </div>
            </div>`;

      teamCards.push(employee);
    } else {
      employee = `
            <div class="container column is-one-fifth">
                <div class="card">
                    <div class="card-content">
                        <p class="title is-centered">
                            ${team[i].name}
                        </p>
                        <p class="subtitle">
                            <i class=""></i>
                            ${team[i].getRole()}
                        </p>
                    </div>
                    <div class="card-content">
                        <div class="box">
                            ID: ${team[i].id}
                        </div>
                        <div class="box">
                            Email: ${team[i].email}
                        </div>
                        <div class="box">
                            GitHub: ${team[i].school}
                        </div>
                    </div>
                </div>
            </div>`;

      teamCards.push(employee);
    }
  }
}

function generateHTML(team) {
  employeeHTML(team);

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    </head>
    <body>
        <!--Header/Hero-->
        <section class="hero is-link">
            <div class="hero-body has-text-centered">
              <p class="title">
                My Team
              </p>
            </div>
        </section>

        <main>
            <div class="container">
                <section class="section">
                    <div class="columns">
                        
                    <div>
                </section> 
            </div>
        </main>
    </body>    
</html>
    `;
}

module.exports = {
  generateHTML,
  employeeHTML,
};

${teamCards.join("")}