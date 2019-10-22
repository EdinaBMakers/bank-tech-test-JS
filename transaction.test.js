'use strict';

const {Transaction} = require('./transaction');

describe('Transaction', () => {
  test('it can be a deposit transaction', () => {
    const date = Date.now();
    const amount = 1000;

    const transaction = Transaction.deposit(date, amount);

    expect(transaction.date).toEqual(date);
    expect(transaction.credit).toEqual(amount);
    expect(transaction.debit).toEqual(0);
  });

  test('it cannot be a negative transaction', () => {
    const date = Date.now();

    expect(() => { Transaction.deposit(date, -1) })
      .toThrowError('Deposit must be greater than 0');
  });

  test('it cannot be a zero deposit', () => {
    const date = Date.now();

    expect(() => { Transaction.deposit(date, 0) })
      .toThrowError('Deposit must be greater than 0');
  });

  test('it can be a withdrawal transaction', () => {
    const date = Date.now();
    const amount = 1000;

    const transaction = Transaction.withdrawal(date, amount);

    expect(transaction.date).toEqual(date);
    expect(transaction.credit).toEqual(0);
    expect(transaction.debit).toEqual(amount);
  });
});
