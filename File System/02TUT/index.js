const fsPromises = require('fs').promises;
const fs = require('fs');
const path = require('path');

// This is known as a callback hell, it's a function with multiple nested callbacks
//The best way to do this is to use an async function
fs.writeFile(path.join(__dirname, 'files', 'newfile.txt'), 'Hello there.', (err) => {
    if (err) throw err;
    console.log('write complete');
    fs.appendFile(path.join(__dirname, 'files', 'newfile.txt'), '\n Append this text.' ,(err) => {
        if (err) throw err;
        console.log('append succesfull');

        fs.rename(path.join(__dirname, 'files', 'newfile.txt'), path.join(__dirname, 'files', 'newfilerename.txt'), (err) => {
            if (err) throw err;
            console.log('File has been renamed.');
        });
    });
});

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files','start.txt'), 'utf8');
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\n Nice to meet you.');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files','promiseComplete.txt'), 'utf8');
        console.log(newData)
    } catch (err) {
        console.error(err);
    }
}

fileOps();



console.log(`Hello....`);

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
//     if (err) throw err;
//     console.log(`Write complete`);

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n Yes it is.', (err) => {
//         if (err) throw err;
//         console.log(`Append complete`);

//         fs.renameFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n Yes it is.', path.join(__dirname, 'files', 'newReply.txt'), '\n\n New reply.', (err) => {
//             if (err) throw err;
//             console.log(`Rename complete`);
//         }); 

//     });

// });

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});