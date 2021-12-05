const fs = require('fs');

function getFilesSizeInBytes(filename){
    const stats = fs.statSync(filename);
    const fileSizeInBytes = stats['size'];
    return fileSizeInBytes;
}

console.log(getFilesSizeInBytes(`${process.cwd()}\\index.js`), `bytes`);