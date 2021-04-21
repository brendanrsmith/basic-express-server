'use strict';

// first, we list external 3rd party modules
const dotenv = require('dotenv');

// then, internal modules
const server = require('./src/server.js');

// then, application and config files
dotenv.config();
const PORT = process.env.PORT || 3333;

// lastly, file logic
server.start(PORT);
