const prompt = require('prompt-sync')();
const bank = require('./bankEngine');

function showMenu() {
  console.log("\n=== Banking System ===");
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit");
}

function runBankingApp() {
  let running = true;

  while (running) {
    showMenu();
    const choice = prompt("Choose option (1-4): ");

    switch (choice) {
      case '1':
        console.log(`\nYour balance is: ${bank.getBalance()}`);
        break;

      case '2':
        const depositInput = prompt("Enter amount to deposit: ");
        const depositAmount = parseFloat(depositInput);

        if (isNaN(depositAmount) || depositAmount <= 0) {
          console.log("Invalid amount. Please enter a positive number.");
        } else {
          bank.deposit(depositAmount);
          console.log(`Deposited ${depositAmount}. New balance: ${bank.getBalance()}`);
        }
        break;

      case '3':
        const withdrawInput = prompt("Enter amount to withdraw: ");
        const withdrawAmount = parseFloat(withdrawInput);

        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
          console.log("Invalid amount. Please enter a positive number.");
        } else if (!bank.withdraw(withdrawAmount)) {
          console.log("Insufficient money or invalid amount.");
        } else {
          console.log(`Withdrew $${withdrawAmount}. New balance: ${bank.getBalance()}`);
        }
        break;

      case '4':
        console.log("Thank you and goodbye!");
        running = false;
        break;

      default:
        console.log("Invalid choice. Please select an option between 1 and 4.");
    }
  }
}

runBankingApp();
