var dataTables = require("../data/table");
var dataWaitList = require("../data/waitlist");

module.exports = function(app){
    app.get("/api/tables", function(req, res) {
        res.json(dataTables);
      });

      app.get("/api/waitlist", function(req, res) {
        res.json(dataWaitList);
      });
    
      app.post("/api/tables", function(req, res) {
    
        if (dataTables.length < 8) {
          dataTables.push(req.body);
        }
        else {
          dataWaitList.push(req.body);
        }
      });

}