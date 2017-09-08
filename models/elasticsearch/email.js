var elasticsearch = require("elasticsearch");

function Email() {}

const index = "web3";
const type = "email";

var client = new elasticsearch.Client({
  host: process.env.ELASTICSEARCH || "localhost:32780",
  log: "trace"
});

Email.prototype.get = function(id) {
  return client.get({
    "index": index,
    "type": type,
    "id": id
  });
};

Email.prototype.create = function(id, data) {
  return client.create({
    "index": index,
    "type": type,
    "id": id,
    "body": data
  });
};

Email.prototype.delete = function(id) {
  return client.delete({
    "index": index,
    "type": type,
    "id": id
  });
};

Email.prototype.exists = function(id) {
  return client.exists({
    "index": index,
    "type": type,
    "id": id
  });
};

Email.prototype.count = function() {
  return client.count({
    "index": index,
    "type": type
  });
};

exports = module.exports = new Email();
