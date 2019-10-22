'use strict';

const { Statement } = require('./statement');

describe('Transaction', () => {
  let statement;

  beforeEach(() => {
    statement = new Statement;
  });

  test('it has zero balance by default', () => {
    expect(statement.balance).toEqual(0);
  });

  test('it does not have any transactions by default', () => {
    expect(statement.transactions).toEqual([]);
  });
});