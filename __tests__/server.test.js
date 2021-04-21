'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest'); // in-memory request engine
const request = supertest(server); // start and init server in mem

describe('WEB SERVER:', () => {

  it('should respond with a 404 on bad route', async () => {
    const response = await request.get('/foo');
    expect(response.status).toBe(404);
  });

  it('should respond with a 404 on bad method', async () => {
    const response = await request.put('/foo');
    expect(response.status).toBe(404);
  });
  
  it('should respond with a 200 on if name present', async () => {
    const response = await request.get('/person?name=andy');
    expect(response.status).toBe(200);
  });

  it('should output correct object given name in query string', async () => {
    const response = await request.get('/person?name=andy');
    expect(response.body.name).toBe('andy');
  });
  
});
