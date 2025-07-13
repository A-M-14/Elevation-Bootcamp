let balance = 100;

function getBalance() {
  return balance;
}

function deposit(amount) {
  if (amount > 0) {
    balance += amount;
    return true;
  }
  return false;
}

function withdraw(amount) {
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    return true;
  }
  return false;
}

module.exports = { getBalance, deposit, withdraw };
