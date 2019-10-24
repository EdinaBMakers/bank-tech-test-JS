class Statement {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  makeTransaction(transaction) {
    this.transactions.push(transaction);
    this.balance += (transaction.credit - transaction.debit);
  }
}

module.exports = { Statement };