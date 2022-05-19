const { readFileSync, writeFileSync } = require("fs");

// read file
console.log("Starting...");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//Write file (If file doesn´t exist will create one)

writeFileSync(
    "./content/result-sync.txt",
    `Here is my new result : ${first}, ${second}`,
    { flag: "a"}
);


console.log("done with the task");
console.log("Starting the next one");