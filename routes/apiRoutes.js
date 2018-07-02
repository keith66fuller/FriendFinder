const friends = require("../data/friends");

function userDiff(a,b) {
  'use strict';

  return a.scores.reduce((acc, curr, idx) => {
    return acc + Math.abs(curr - b.scores[idx]);
  }, 0);
}

module.exports = function(app) { ;
  "use strict";

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    res.send(
      friends[
      friends.map((friend, i) => {
        return {
          'diff': userDiff(req.body, friend),
          'index': i
        };
      }).sort((a, b) => a.diff - b.diff)[0].index
      ]
    );
  });
};
