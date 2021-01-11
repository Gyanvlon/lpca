document.getElementById("leagueTable").addEventListener("click", displayTable);
document.getElementById("newResult").addEventListener("click", setNewResult);
let results = JSON.parse(localStorage.getItem("results"));
function setNewResult() {
  window.location = "new-result.html";
}
function displayTable() {
  window.location = "table.html";
}
if (results !== null) {
  results.sort((a, b) => {
    let da = new Date(a.matchDate),
      db = new Date(b.matchDate);
    return db - da;
  });
  let resultsView = document.getElementById("results");
  resultsView.innerHTML = "";
  for (let result of results) {
    resultsView.innerHTML += `<div class="container">
              <div class="card">
                  <div class="card-body">
                  <div><b>${result.matchDate}</b></div>
                  <div class="match">
                  <span id="firstTeam">${result.firstTeamName}(${result.firstTeamScore})</span> vs
                  <span id="secondTeam">${result.secondTeamName}(${result.secondTeamScore})</span> 
                  </div>
                  </div>
            </div>
    </div> <br />`;
  }
} else {
  let resultsView = document.getElementById("results");
  resultsView.innerHTML = "";
  resultsView.innerHTML += `<div class="container">
          <div class="col-md-4">
              <div class="card">
                  <div class="card-body">
                  <div><b>No Match Play </b></div>
                  </div>
                </div>
            </div>
    </div> <br />`;
}
