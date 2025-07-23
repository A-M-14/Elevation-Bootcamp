const AutoCompleteTrie = require('../trie/AutoCompleteTrie');

let trie;
beforeEach(() => {
  trie = new AutoCompleteTrie();
});

test('addWord adds and finds a word', () => {
  trie.addWord("cat");
  expect(trie.findWord("cat")).toBe(true);
});

test('findWord returns false for non-existing word', () => {
  trie.addWord("cat");
  expect(trie.findWord("dog")).toBe(false);
});

test('predictWords returns correct completions', () => {
  trie.addWord("cat");
  trie.addWord("car");
  trie.addWord("card");
  expect(trie.predictWords("ca").sort()).toEqual(["car", "card", "cat"].sort());
});