var friends = require("../data/friends");

function userDiff(a,b) {
  console.log(`A.SCORES: ${a.scores}`)
  console.log(`B.SCORES: ${b.scores}`)
  console.log(`REDUCE: ${a.scores.reduce((acc, curr, idx) => {
    return acc + Math.abs(curr - b.scores[idx])
  }, 0)}`)
  return a.scores.reduce((acc, curr, idx) => {
    return acc + Math.abs(curr - b.scores[idx])
  }, 0)
}

function diffSort(a,b) {
  return a.diff - b.diff
}

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    //Someone wants to take the survey; let us find a match.
    console.log(`INCOMING: ${JSON.stringify(req.body)}`)
    const user = req.body;

    let bestScore = friends.map((friend, i) => { return {'diff': userDiff(user,friend), 'index': i}} ).sort((a,b) => a.diff - b.diff)[0].index
    console.log(`DIFF: ${userDiff(user,friends[0])}`)
    console.log(scores)
    console.log(bestScore)


  });
};
