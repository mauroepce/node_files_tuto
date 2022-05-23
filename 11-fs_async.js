const { readFile, writeFile } = require("fs");

console.log("Starting an async task");
readFile("./content/first.txt", "utf8", (err, file) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = file;

    readFile("./content/second.txt", "utf-8", (err, file) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = file;

         writeFile("./content/result-async.txt", `The new async result is: ${first}, ${second}`, (err, file) => {
            if (err) {
            console.log(err);
            return;
        }
        console.log("done with the async task!");
        })
    })
})
console.log("Starting the next task...");
