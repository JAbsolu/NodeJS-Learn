const os = require('os');
const patj = require('path');
const { add, multiply, subtract, divide } = require('./math');

console.log(add(2,3));
console.log(multiply(2,3));
console.log(subtract(5,3));
console.log(divide(6,3));

//Difference between Node JS and Vanilla JS
// 1) Node runs on the server and not in a browser (Backend, not frontend)
// 2) The console is the terminal window
console.log('Hello world');
// 3) has gLobal object instead of window object from Vanilla JS
console.log(global);

// 4) Has Common core modules

// 5) Common JS modiles instead of ES6 modules

console.log(os.type()); //print the os type
console.log(os.version()); //print the os version
console.log(os.homedir()); // print the home directory

console.log(__dirname); // print the directory name
console.log(__filename); // print the file name

console.log(path.dirname(__filename));  // print the directory path
console.log(path.basename(__filename)); // print only the file name without the path
console.log(path.extname(__filename));  // print only the extenson of the file without the file name and path

console.log(path.parse(__filename));