class Transaction {
  constructor(date, credit = 0, debit = 0) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
  }

  static deposit(date, amount) {
    return new Transaction(date, amount);
  }
}

module.exports = {Transaction};