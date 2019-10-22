'use strict';

const {Transaction} = require('./transaction');

describe('Transaction', () => {
  test('It can be a deposit transaction', () => {
    const date = Date.now();
    const amount = 1000;

    const transaction = Transaction.deposit(date, amount);

    expect(transaction.date).toEqual(date);
    expect(transaction.credit).toEqual(amount);
    expect(transaction.debit).toEqual(0);
  });
});
