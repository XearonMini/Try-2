console.log(global);
const fs = require('fs-extra');
fs.mkdirpSync('Dir1')
fs.mkdirpSync('Dir2')
fs.mkdirpSync('Dir3')
file = "Dir1/file.txt";
fs.createFileSync(file)
fs.moveSync("Dir1/file.txt","Dir2/file.txt", err => {
    if (err) return console.error(err)
    console.log("Moved 'file.txt' to 'Dir2")
})
fs.copy("Dir2/file.txt", "Dir3/file.txt", err =>{
    if (err) return console.error(err)
    console.log("Copied 'file.txt' to 'Dir3' ")
})