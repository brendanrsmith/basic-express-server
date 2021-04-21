'use strict';

const loggerMW = require('../src/middleware/logger');

// Tested MW needs to either be exported from the server, or a separate module
describe('LOGGER MIDDLEWARE', () => {
  
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); // spy on next method

  beforeEach(() => {
    // attach to the console (aka take it over)
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // put the console back
    consoleSpy.mockRestore();
  });

  it('properly logs some output', () => {
    loggerMW(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('properly moves to the next middleware', () => {
    loggerMW(req, res, next);
    // toHaveBeenCalled() isnt enough. We need to make sure it was called without any args
    expect(next).toHaveBeenCalledWith();
  });

});
