// Deposit some mony
// Determine number of lines to bet on
// Collect a bet amount
// Spin the slot machine
// Check if the user won
// Give the user their winnings
// Play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  "A": 2,
  "B": 4,
  "C": 6,
  "D": 8
}

const SYMBOL_VALUES = {
  "A": 5,
  "B": 4,
  "C": 3,
  "D": 2
}

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.")
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1 - 3): ");
    const getNumberOfLines = parseInt(lines);

    if (isNaN(getNumberOfLines) || getNumberOfLines <= 0 || getNumberOfLines > 3) {
      console.log("Invalid number of lines, try again.");
    } else {
      return getNumberOfLines
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter your total bet: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)) {
      console.log("Invalid bet, try again.");
    } else {
      return numberBet;
    }
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < COLS; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [[], [], []];
  for (let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length)
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

const reels = spin();
console.log(reels)
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);

