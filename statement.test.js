'use strict';

const { Statement } = require('./statement');
const { Transaction } = require('./transaction');

describe('Statement', () => {
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
    test('it adds deposits to the balance', () => {
      statement.makeTransaction(Transaction.deposit(Date.now(), 1000));
      statement.makeTransaction(Transaction.deposit(Date.now(), 2000));

      expect(statement.balance).toEqual(3000);
    });

    test('it subtracts withdrawals from the balance', () => {
      statement.makeTransaction(Transaction.withdrawal(Date.now(), 455));
      statement.makeTransaction(Transaction.withdrawal(Date.now(), 289));

      expect(statement.balance).toEqual(-744);
    });

    test('it can modify balance with both deposits and withdrawals', () => {
      statement.makeTransaction(Transaction.deposit(Date.now(), 789));
      statement.makeTransaction(Transaction.withdrawal(Date.now(), 213));

      expect(statement.balance).toEqual(576);
    });
  });

  describe('print', () => {
    test('it can display a blank statement', () => {
      expect(statement.print()).toEqual('date || credit || debit || balance\n');
    });

    test('it can diplay all deposits and withdrawals in reverse chronological order', ()=> {
      const firstTranDate = new Date(2019, 10, 22);
      const secondTranDate = new Date(2019, 10, 24);

      statement.makeTransaction(Transaction.deposit(firstTranDate, 1000));
      statement.makeTransaction(Transaction.withdrawal(secondTranDate, 150));

      const expectedStatment = 'date || credit || debit || balance\n24/10/2019 || 0 || 150 || 850\n22/10/2019 || 1000 || 0 || 1000';

      expect(statement.print()).toEqual(expectedStatment);
    });

    test('it gives the same result if called multiple times', () => {
      const firstTranDate = new Date(2019, 10, 22);
      const secondTranDate = new Date(2019, 10, 24);

      statement.makeTransaction(Transaction.deposit(firstTranDate, 1000));
      statement.makeTransaction(Transaction.withdrawal(secondTranDate, 150));

      const expectedStatment = 'date || credit || debit || balance\n24/10/2019 || 0 || 150 || 850\n22/10/2019 || 1000 || 0 || 1000';

      expect(statement.print()).toEqual(expectedStatment);
      expect(statement.print()).toEqual(expectedStatment);
    });
  });
});