/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains(); 
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

   makeChains() {
    let chains = new Map();

    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let nextWord = ""

      if (i < this.words.length - 1) {
        nextWord = this.words[i + 1];
      } else {
        nextWord = null
      }

      if (chains.has(word)) {
        chains.get(word).push(nextWord);
      } else {
        chains.set(word, [nextWord]);
      }
    }

    this.chains = chains;
  }


   /** Pick a random item from an array */
   static choice(array) {
    return array[Math.floor(Math.random() * array.length)];
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Array.from(this.chains.keys())
    // get random key
    let rand_key = MarkovMachine.choice(keys)
    let output_words = [];

    // create the markov chain
    while (output_words.length < numWords && rand_key !== null) {
      output_words.push(rand_key);
      // get next key
      rand_key = MarkovMachine.choice(this.chains.get(rand_key));
    }
    return (output_words.join(' '))
  }
 
}

module.exports = {
  MarkovMachine,
};
