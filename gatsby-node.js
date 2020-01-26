require('source-map-support').install();
require('ts-node').register();

const { createPages } = require('./src/lib/create-pages');
const { createNode } = require('./src/lib/create-node');

exports.createPages = createPages;
exports.onCreateNode = createNode;
