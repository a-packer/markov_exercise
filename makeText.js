const markov = require("./markov");
const fs = require(fs);
const axios = require(axios);
const process = require(process);


// generates the Markov Text from file or url text and displays it on console
function markovText(text) {
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText())
}


// make text from file

function makeText(path) {
    fs.readFile(path, "utf8", function cb(err, data) {
      if (err) {
        console.error(`Cannot read file: ${path}: ${err}`);
        process.exit(1);
      } else {
        generateText(data);
      }
    });
  
  }

// make text from url

async function makeURLText(url) {
    resp = await axios.get(url)
    markovText(resp.data)
}


// determine if cmd line calls for url or text file

inputMethod = process.argv[2]
inputMethod = process.argv[2]

if (inputMethod === "file") {
    makeText(path);
}
else if (inputMethod === "url") {
    makeURLText(path)
}
else {
    console.log("Unknown Method. Try 'file' or 'url" )
}




