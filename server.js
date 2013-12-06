#!/usr/bin/env node

var path = require('path');
var architect = require("architect");

// Load all enable plugins
var configPath = path.join(__dirname, "config.js");
var config = architect.loadConfig(configPath);

architect.createApp(config, function (err, app) {
  if (err) throw err;
  console.info("App ready");
});