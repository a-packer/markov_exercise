const markov = require("./markov");
const fs = require("fs");
const axios = require("axios");
const process = require("process");


// generates the Markov Text from file or url text and displays it on console
function markovText(text) {
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText())
}


// get text from file to be converted to markovText

function makeText(path) {
    fs.readFile(path, "utf8", function cb(err, data) {
      if (err) {
        console.error(`Cannot read file: ${path}: ${err}`);
        process.exit(1);
      } else {
        markovText(data);
      }
    });
  
  }

// get text from url to be converted to markovText

async function makeURLText(url) {
    let resp
    try {
        resp = await axios.get(url)
    } catch(err) {
        console.log(`Cannot read URL ${url}: ${err}`);
        process.exit(1)
    }
    markovText(resp.data)
}


// determine if cmd line calls for url or text file

inputMethod = process.argv[2]
inputPath = process.argv[3]


if (inputMethod === "file") {
    makeText(inputPath);
}
else if (inputMethod === "url") {
    makeURLText(inputPath)
}
else {
    console.log("Unknown Method. Try 'file' or 'url" )
}




