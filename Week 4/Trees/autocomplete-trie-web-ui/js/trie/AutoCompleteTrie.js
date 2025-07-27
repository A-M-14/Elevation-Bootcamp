class AutoCompleteTrie {
  constructor(value = '') {
    this.value = value;
    this.children = {};
    this.endOfWord = false;
  }

  addWord(word) {
    let node = this;

    for (const char of word.toLowerCase()) {
      if (!node.children[char]) {
        node.children[char] = new AutoCompleteTrie(char);
      }
      node = node.children[char];
    }
    node.endOfWord = true;
  }

  findWord(word) {
    let node = this;

    for (const char of word.toLowerCase()) {
      if (!node.children[char]){
        return false;
      }
      node = node.children[char];
    }

    return node.endOfWord;
  }

  _getRemainingTree(prefix, node = this) {
    for (const char of prefix.toLowerCase()) {
      if (!node.children[char]){ 
        return null;
      }
      node = node.children[char];
    }

    return node;
  }

  _allWordsHelper(prefix, node, allWords) {
    if (node.endOfWord) {
      allWords.push(prefix);
    }

    for (const char in node.children) {
      this._allWordsHelper(prefix + char, node.children[char], allWords);
    }
  }

  predictWords(prefix) {
    const node = this._getRemainingTree(prefix);
    const allWords = [];

    if (node) {
      this._allWordsHelper(prefix.toLowerCase(), node, allWords);
    }
    
    return allWords;
  }
}

// Make it work in both Node.js and browser environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AutoCompleteTrie;
}