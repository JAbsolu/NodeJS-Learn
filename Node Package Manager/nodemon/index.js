//nodemon automatically search for the index.js file
//to exit nodemon in terminal use ctrl + c

// cmd node install in termial will add node_modules directory
//To add a dev dependency, use -D flag, example npm i nodemon -D

// ~ in front of version means to allow only patch version update
// ^ in front of version means, allow patch and minor and patch version updates

// cmd npm update, updates all pacakges
// npm rm or npm uninstall remove/uninstall a dependency

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss')); // \t is tab

console.log(uuid());

console.log()