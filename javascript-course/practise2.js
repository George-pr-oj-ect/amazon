function main() {
  let initialBalance = parseInt(prompt("Enter initial balance: "));
  let balance = initialBalance;

  let choice = parseInt(prompt("Which process do you want to perform: 1.Deposit Cash 2.Withdraw Cash 3.Show balance 4.Transfer Cash "));

  if (choice === 1) {
    balance = deposit(balance);
  } else if (choice === 2) {
    balance = withdraw(balance);
  } else if (choice === 3) {
    displayBalance(balance);
  } else if (choice === 4) {
    transferCash(balance);
  }

  return balance;

}
function deposit(balance) {
  let amount = parseInt(prompt("Enter amount to deposit: "));
  let newBalance = balance + amount;
  alert(`balance remaining after deposit ${newBalance}`)
  return newBalance;
}
function withdraw(balance) {
  let amount = parseInt(prompt("Enter amount to withdraw: "));
  let newBalance = balance - amount;
  alert(`balance remaining after withdrawal ${newBalance}`)
  return newBalance;
}
function displayBalance(balance) {
  alert(`your current balance is ${balance}`);
}
function transferCash(balance) {
  let amount = parseInt(prompt("Enter amount to transfer: "));
  let account = prompt("Enter account to transfer cash: ");
  let newBalance = balance - amount;
  alert(`Amount transferred to ${account} is ${amount} cash remaining is ${newBalance}`)
}
main();