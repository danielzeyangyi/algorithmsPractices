class TrieNode {
  constructor() {
    this.children = new Map(); // based on requirement, can be obj, or array
    this.isEnd = false;
  }
}

// iteratively
const searchHelper = function(root, word) {
  let currNode = root;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let node = currNode.children.get(char);
    if (node == null) return null;
    currNode = node;
  }
  return currNode;
};

// recursively
const recursiveSearch = function(root, word) {
  return recursiveHelper(root, word, 0);
};

const recursiveHelper = function(root, word, index) {
  if (index === word.length) return root;

  let node = root.children.get(word[index]);
  if (node == null) return null;
  return recursiveHelper(node, word, index + 1);
};

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // insert a word
  insert(word) {
    let currNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      let node = currNode.children.get(char);
      if (node == null) {
        node = new TrieNode();
        currNode.children.set(char, node);
      }
      currNode = node;
    }
    currNode.isEnd = true;
  }

  //search a word
  search(word) {
    let node = recursiveSearch(this.root, word);
    return node != null && node.isEnd;
  }

  // search a word start with
  startsWith(word) {
    let node = recursiveSearch(this.root, word);
    return node != null;
  }
}
