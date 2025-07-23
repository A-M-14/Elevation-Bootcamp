const readline = require('readline');
const AutoCompleteTrie = require('../trie/AutoCompleteTrie');

const trie = new AutoCompleteTrie();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== AutoComplete Trie Console ===");
console.log("Type 'help' for commands");

rl.setPrompt('> ');
rl.prompt();

rl.on('line', (input) => {
  const [command, ...args] = input.trim().split(' ');
  const arg = args.join(' ');

  switch (command) {
    case 'add':
      trie.addWord(arg);
      console.log(`✓ Added '${arg}' to dictionary`);
      break;

    case 'find':
      console.log(trie.findWord(arg)
        ? `✓ '${arg}' exists in dictionary`
        : `✗ '${arg}' not found in dictionary`);
      break;

    case 'complete':
      const suggestions = trie.predictWords(arg);
      console.log(suggestions.length
        ? `Suggestions for '${arg}': ${suggestions.join(', ')}`
        : `✗ No suggestions found for '${arg}'`);
      break;

    case 'help':
      console.log(`Commands:
  add <word>        - Add word to dictionary
  find <word>       - Check if word exists
  complete <prefix> - Get completions
  help              - Show this message
  exit              - Quit program`);
      break;

    case 'exit':
      console.log("Goodbye!");
      rl.close();
      break;

    default:
      console.log("Unknown command. Type 'help' for options.");
  }

  rl.prompt();
});