document.getElementById("back").addEventListener("click", goBack);
document.getElementById("form-result").addEventListener("submit", saveResult);
function saveResult(e) {
  let result = {
    firstTeamName: document.getElementById("firstTeam").value,
    firstTeamScore: document.getElementById("firstTeamScore").value,
    secondTeamName: document.getElementById("secondTeam").value,
    secondTeamScore: document.getElementById("secondTeamScore").value,
    matchDate: document.getElementById("matchDate").value,
  };
  if (localStorage.getItem("results") === null) {
    let results = [];
    results.push(result);
    localStorage.setItem("results", JSON.stringify(results));
  } else {
    let results = JSON.parse(localStorage.getItem("results"));
    results.push(result);
    localStorage.setItem("results", JSON.stringify(results));
  }
  setNewResult();
  e.preventDefault();
}
function goBack() {
  window.history.back();
}
function setNewResult() {
  window.location = "result.html";
}
