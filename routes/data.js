var dataTables = require("../data/table");
var dataWaitList = require("../data/waitlist");

module.exports = function(hotRes){
    hotRes.get("/api/tables", function(req, res) {
        res.json(dataTables);
      });

      hotRes.get("/api/waitlist", function(req, res) {
        res.json(dataWaitList);
      });
    
      hotRes.post("/api/tables", function(req, res) {
    
        if (dataTables.length < 8) {
          dataTables.push(req.body);
        }
        else {
          dataWaitList.push(req.body);
        }
      });

}