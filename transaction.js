class Transaction {
  constructor(date, credit = 0, debit = 0) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
  }

  static deposit(date, amount) {
    if (amount <= 0) {
      throw 'Deposit must be greater than 0';
    }
    return new Transaction(date, amount);
  }
}

module.exports = {Transaction};