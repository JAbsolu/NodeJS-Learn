const fs = require('fs');

//Create a directory if it doesn't exist
if (!fs.existsSync('./new')) { // If the folder new does not exist
    fs.mkdir('./new', (err) => { //create the directory
        if (err) throw err;
        console.groupCollapsed(`Directory Created`);
    });
};

//Remove a directory if it exists
if (fs.existsSync('./new')) { // If the folder new exists, delete the directory
    fs.rmdir('./new', (err) => { //remove the directory
        if (err) throw err;
        console.groupCollapsed(`Directory removed`);
    });
};

