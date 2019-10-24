class Statement {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  makeTransaction(transaction) {
    this.transactions.push(transaction);
    this.balance += (transaction.credit - transaction.debit);
  }

  print() {
    const header = 'date || credit || debit || balance';
    const reversedTransactions = this.transactions.slice().reverse();
    let balance = this.balance;

    const transactionsStr = reversedTransactions.map(trans => {
      let dateStr = trans.date.getDate() + '/' + trans.date.getMonth() + '/' + trans.date.getFullYear();
      let str = `${dateStr} || ${trans.credit} || ${trans.debit} || ${balance}`;
      balance += (trans.debit - trans.credit);
      return str;
    })

    return header + '\n' + transactionsStr.join('\n')
  }
}

module.exports = { Statement };