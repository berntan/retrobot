"use strict";

let retrobot = require("./lib");
let express = require("express");

console.log("starting retrobot");

retrobot.setup();

console.log("connected to Slack");

const app = express();
app.get('/internal/status', (req, res) => res.send({
    "contact": process.env.CONTACT
}));
app.get('/internal/version', (req, res) => res.send({
    "version": process.env.BUILD_VERSION || "local",
    "revision": process.env.GIT_REVISION || "<unknown-revision>"
}));

let listener = app.listen(process.env.PORT || 0);

console.log("web server listening on port " + listener.address().port);
