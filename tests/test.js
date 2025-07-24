import { expect } from 'chai';
import { getCurrentTimestamp, server } from '../src/server.js';

describe('Timestamp Function', function() {
  it('should return a valid ISO timestamp', function() {
    const timestamp = getCurrentTimestamp();
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    expect(timestamp).to.match(isoRegex);
  });

  it('should return the current timestamp', function() {
    const timestamp = getCurrentTimestamp();
    const now = new Date().toISOString();
    expect(new Date(timestamp).getTime()).to.be.closeTo(new Date(now).getTime(), 1000);
  });

  // Close the server after all tests
  after(function() {
    server.close();
  });
});
