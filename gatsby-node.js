require('source-map-support').install();
require('ts-node').register();

exports.createPages = require('./src/lib/create-pages').createPages;

exports.onCreateNode = require('./src/lib/create-node').createNode;
