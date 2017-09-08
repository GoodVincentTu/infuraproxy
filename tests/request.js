var request = require("superagent");

var url = process.env.INFURA;

console.log(url);

request
  .post(url)
  .set("Content-Type", "application/json")
  .send({"jsonrpc": "3.0", "id": 100, "method": "eth_blockNumber", "params": ["test"], "email": "test"})
  .end(function(err, res){
    if (err || !res.ok) {
      console.log("Error", err);
    } else {
      console.log(JSON.stringify(res.body));
    }
  });