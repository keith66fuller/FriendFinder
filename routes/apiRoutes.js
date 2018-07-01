var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    //Someone wants to take the survey; let us find a match.
    console.log(`INCOMING: ${JSON.stringify(req.data)}`)

  });
};
