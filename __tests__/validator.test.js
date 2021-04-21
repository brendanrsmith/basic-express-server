'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest'); // in-memory request engine
const request = supertest(server); // start and init server in mem

describe('VALIDATOR: ', () => {

  it('should respond with a 500 on an error', async () => {
    const response = await request.get('/person?name=');
    expect(response.status).toBe(500);
    
  });
});
