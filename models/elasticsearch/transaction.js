var elasticsearch = require("elasticsearch");

function Transaction() {}

const index = "web3";
const type = "transaction";

var client = new elasticsearch.Client({
  host: process.env.ELASTICSEARCH || "localhost:32780",
  log: "trace"
});

Transaction.prototype.get = function(id) {
  return client.get({
    "index": index,
    "type": type,
    "id": id
  });
};

Transaction.prototype.create = function(id, data) {
  return client.create({
    "index": index,
    "type": type,
    "id": id,
    "body": data
  });
};

Transaction.prototype.delete = function(id) {
  return client.delete({
    "index": index,
    "type": type,
    "id": id
  });
};

Transaction.prototype.exists = function(id) {
  return client.exists({
    "index": index,
    "type": type,
    "id": id
  });
};

Transaction.prototype.count = function() {
  return client.count({
    "index": index,
    "type": type
  });
};

exports = module.exports = new Transaction();
