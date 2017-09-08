const express = require("express");
const request = require("superagent");
const router = express.Router();

/* POST infura methods. */
// TODO 利用 next 來過濾是否有 email，並且寫入 elasticsearch 中
// TODO elasticsearch 規劃
router.post("/", function(req, res, next) {
  let email;
  if (req.body.email) {
    email = req.body.email;
    // TODO call AWS SES send mail
    // TODO save information to elasticsearch
  }

  request
    .post(process.env.INFURA)
    .set("Content-Type", "application/json")
    .send(req.body)
    .end(function(err, response){
      if (err || !response.ok) {
        res.status(405);
      } else {
        // TODO sendRawTransaction need to save transactionHash to elasticSearch
        res.json(JSON.parse(response.text));
      }
    });
});

router.get("/", function(req, res, next) {
  res.render("infuraProxy", {});
});

module.exports = router;
