const path = require('path');

console.log(path.sep);

//create a file path
const filePath = path.join("/content", "subfolder", "test.txt")
console.log(filePath);

//acces the base file from directory
const baseFile = path.basename(filePath);
console.log(baseFile);

//access full path or absolute path

const absolutePath = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolutePath);