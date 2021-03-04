console.log("task-7");

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const createdTransaction = { currentAmount: amount, currentType: type };
    return createdTransaction;
  },

  deposit(amount) {
    if (Number.isNaN(+amount)) {
      return console.log("Ви ввели не число");
    }
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    this.balance += amount;
  },

  withdraw(amount) {
    if (Number.isNaN(+amount)) {
      return console.log("Ви ввели не число");
    }
    if (amount > this.balance) {
      return console.log("Не достатньо коштів на рахунку");
    }
    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
    this.balance -= amount;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return this.transactions[id];
  },

  getTransactionTotal(type) {
    let result = 0;
    for (const obj of this.transactions) {
      const { currentAmount,currentType } = obj;
      if (type === currentType) {
        result += currentAmount;
      }
    }
    return result;
  },
};
account.deposit(324);
account.deposit(12);
account.withdraw(500);
account.withdraw('jjj');
account.withdraw(12);
account.withdraw(129);


console.log(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

