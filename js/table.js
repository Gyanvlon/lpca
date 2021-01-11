let results = JSON.parse(localStorage.getItem("results"));
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
    if (values.drawMatch == null) {
      if (
        values.winnerTeam.teamName == "Manchester City" ||
        values.winnerTeam.teamName == "Liverpool" ||
        values.winnerTeam.teamName == "Everton" ||
        values.winnerTeam.teamName == "Tottenhm Hotspur" ||
        values.winnerTeam.teamName == "Manchester United" ||
        values.winnerTeam.teamName == "Arsenal" ||
        values.winnerTeam.teamName == "Chelsea (C)"
      ) {
        for (let team of teams) {
          if (team.name == values.winnerTeam.teamName) {
            team.pld += values.winnerTeam.pld;
            team.pts += values.winnerTeam.pts;
            team.w += values.winnerTeam.w;
            team.l += values.winnerTeam.l;
            team.d += values.winnerTeam.d;
          }
          if (
            val.looserTeam.teamName == "Manchester City" ||
            val.looserTeam.teamName == "Liverpool" ||
            val.looserTeam.teamName == "Everton" ||
            val.looserTeam.teamName == "Tottenhm Hotspur" ||
            val.looserTeam.teamName == "Manchester United" ||
            val.looserTeam.teamName == "Arsenal" ||
            val.looserTeam.teamName == "Chelsea (C)"
          ) {
            if (team.name == val.looserTeam.teamName) {
              team.pld += val.looserTeam.pld;
              team.pts += val.looserTeam.pts;
              team.w += val.looserTeam.w;
              team.l += val.looserTeam.l;
              team.d += val.looserTeam.d;
            }
          }
        }
      }
    }

    if (values.drawMatch != null) {
      if (
        values.drawMatch.fName == "Manchester City" ||
        values.drawMatch.fName == "Liverpool" ||
        values.drawMatch.fName == "Everton" ||
        values.drawMatch.fName == "Tottenhm Hotspur" ||
        values.drawMatch.fName == "Manchester United" ||
        values.drawMatch.fName == "Arsenal" ||
        values.drawMatch.fName == "Chelsea (C)"
      ) {
        for (let team of teams) {
          if (team.name == values.drawMatch.fName) {
            team.pld += values.drawMatch.pld;
            team.pts += values.drawMatch.pts;
            team.w += values.drawMatch.w;
            team.l += values.drawMatch.l;
            team.d += values.drawMatch.d;
          }
          if (
            val.drawMatch.sName == "Manchester City" ||
            val.drawMatch.sName == "Liverpool" ||
            val.drawMatch.sName == "Everton" ||
            val.drawMatch.sName == "Tottenhm Hotspur" ||
            val.drawMatch.sName == "Manchester United" ||
            val.drawMatch.sName == "Arsenal" ||
            val.drawMatch.sName == "Chelsea (C)"
          ) {
            if (team.name == val.drawMatch.sName) {
              team.pld += val.drawMatch.pld;
              team.pts += val.drawMatch.pts;
              team.w += val.drawMatch.w;
              team.l += val.drawMatch.l;
              team.d += val.drawMatch.d;
            }
          }
        }
      }
    }
  }
}

function matchPlay(result) {
  if (parseInt(result.firstTeamScore) > parseInt(result.secondTeamScore)) {
    let obj = {
      winnerTeam: {
        teamName: result.firstTeamName,
        pld: 1,
        w: 1,
        l: 0,
        d: 0,
        pts: 3,
      },
      looserTeam: {
        teamName: result.secondTeamName,
        pld: 1,
        w: 0,
        l: 1,
        d: 0,
        pts: 0,
      },
      drawMatch: null,
    };
    return obj;
  } else if (
    parseInt(result.firstTeamScore) < parseInt(result.secondTeamScore)
  ) {
    let obj = {
      winnerTeam: {
        teamName: result.secondTeamName,
        pld: 1,
        w: 1,
        l: 0,
        d: 0,
        pts: 3,
      },
      looserTeam: {
        teamName: result.firstTeamName,
        pld: 1,
        w: 0,
        l: 1,
        d: 0,
        pts: 0,
      },
      drawMatch: null,
    };
    return obj;
  } else {
    let obj = {
      drawMatch: {
        fName: result.firstTeamName,
        sName: result.secondTeamName,
        pld: 1,
        d: 1,
        l: 0,
        w: 0,
        pts: 1,
      },
      winnerTeam: null,
      looserTeam: null,
    };
    return obj;
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
