const express = require("express");
const redis = require("redis");
const app = express();
const redisClient = redis.createClient();
redisClient.set("visits", 0);
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  redisClient.get("visits", (err, visits) => {
    redisClient.set("visits", visits);
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
