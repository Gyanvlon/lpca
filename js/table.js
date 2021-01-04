let results = JSON.parse(localStorage.getItem("results"));
console.log("here is match", results);
let resultsView = document.getElementById("leagueTable");
document.getElementById("back").addEventListener("click", goBack);
resultsView.innerHTML = "";
let teams = [
  {
    name: "Arsenal",
    pld: 0,
    w: 0,
    d: 0,
    l: 0,
    pts: 0,
  },
  {
    name: "Chelsea (C)",
    pld: 0,
    w: 0,
    d: 0,
    l: 0,
    pts: 0,
  },
  {
    name: "Everton",
    pld: 0,
    w: 0,
    d: 0,
    l: 0,
    pts: 0,
  },
  {
    name: "Liverpool",
    pld: 0,
    w: 0,
    d: 0,
    l: 0,
    pts: 0,
  },
  {
    name: "Manchester City",
    pld: 0,
    w: 0,
    d: 0,
    l: 0,
    pts: 0,
  },
  {
    name: "Manchester United",
    pld: 0,
    w: 0,
    d: 0,
    l: 0,
    pts: 0,
  },
  {
    name: "Tottenham Hotspur",
    pld: 0,
    w: 0,
    d: 0,
    l: 0,
    pts: 0,
  },
];
let obj = {
  pld: 0,
  w: 0,
  d: 0,
  l: 0,
  pts: 0,
};
if (results !== null) {
  for (let result of results) {
    let values = matchPlay(result);
    let val = values;
    console.log("hssh", values);
    if (
      values.name == "Manchester City" ||
      values.name == "Liverpool" ||
      values.name == "Everton" ||
      values.name == "Tottenhm Hotspur" ||
      values.name == "Manchester United" ||
      values.name == "Arsenal" ||
      values.name == "Chelsea (C)"
    ) {
      for (let team of teams) {
        if (team.name == values.name) {
          team.pld += values.pld;
          team.pts += values.pts;
          team.w += values.w;
          team.l += values.l;
          team.d += values.d;
        }
        if (
          val.sName == "Manchester City" ||
          val.sName == "Liverpool" ||
          val.sName == "Everton" ||
          val.sName == "Tottenhm Hotspur" ||
          val.sName == "Manchester United" ||
          val.sName == "Arsenal" ||
          val.sName == "Chelsea (C)"
        ) {
          if (team.name == val.sName) {
            team.pld += val.pld;
            team.pts += val.pts;
            team.w += val.w;
            team.l += val.l;
            team.d += val.d;
          }
        }
      }
    }
  }
}

function matchPlay(result) {
  if (parseInt(result.firstTeamScore) > parseInt(result.secondTeamScore)) {
    let winMatch = {
      name: result.firstTeamName,
      sName: result.secondTeamName,
      pld: 1,
      w: 1,
      l: 0,
      d: 0,
      pts: 3,
    };
    return winMatch;
  } else if (
    parseInt(result.firstTeamScore) < parseInt(result.secondTeamScore)
  ) {
    let looseMatch = {
      name: result.firstTeamName,
      sName: result.secondTeamName,
      pld: 1,
      w: 0,
      d: 0,
      l: 1,
      pts: 0,
    };
    return looseMatch;
  } else {
    let drawMatch = {
      name: result.firstTeamName,
      sName: result.secondTeamName,
      pld: 1,
      d: 1,
      l: 0,
      w: 0,
      pts: 1,
    };
    return drawMatch;
  }
}
teams.sort((a, b) => {
  return b.pts - a.pts;
});
var pos = 1;
for (let team of teams) {
  resultsView.innerHTML += `<tr>
              <td>${pos}</td>
                <td>${team.name}</td>
                <td>${team.pld}</td>
                <td>${team.w}</td>
                <td>${team.l}</td>
                <td>${team.d}</td>
                <td>${team.pts}</td>
                </tr>`;
  pos++;
}
function goBack() {
  window.history.back();
}
