var elasticsearch = require("elasticsearch");

function Address() {}

const index = "web3";
const type = "address";

var client = new elasticsearch.Client({
  host: process.env.ELASTICSEARCH || "localhost:32780",
  log: "trace"
});

Address.prototype.get = function(id) {
  return client.get({
    "index": index,
    "type": type,
    "id": id
  });
};

Address.prototype.create = function(id, data) {
  return client.create({
    "index": index,
    "type": type,
    "id": id,
    "body": data
  });
};

Address.prototype.delete = function(id) {
  return client.delete({
    "index": index,
    "type": type,
    "id": id
  });
};

Address.prototype.exists = function(id) {
  return client.exists({
    "index": index,
    "type": type,
    "id": id
  });
};

Address.prototype.count = function() {
  return client.count({
    "index": index,
    "type": type
  });
};

exports = module.exports = new Address();
