'use strict';

const { Statement } = require('./statement');
const { Transaction } = require('./transaction');

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

  describe('makeTransaction', () => {
    test('adds deposits to the balance', () => {
      statement.makeTransaction(Transaction.deposit(Date.now(), 1000));
      statement.makeTransaction(Transaction.deposit(Date.now(), 2000));

      expect(statement.balance).toEqual(3000);
    });

    test('subtracts withdrawals from the balance', () => {
      statement.makeTransaction(Transaction.withdrawal(Date.now(), 455));
      statement.makeTransaction(Transaction.withdrawal(Date.now(), 289));

      expect(statement.balance).toEqual(-744);
    });

    test('can modify balance with both deposits and withdrawals', () => {
      statement.makeTransaction(Transaction.deposit(Date.now(), 789));
      statement.makeTransaction(Transaction.withdrawal(Date.now(), 213));

      expect(statement.balance).toEqual(576);
    });
  });
});