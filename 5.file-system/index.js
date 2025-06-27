const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder, { recursive: true });
    console.log(`Created directory: ${dataFolder}`);
}

const filePath = path.join(dataFolder, 'example.txt');
//sync way of creating the file
fs.writeFileSync(filePath, 'Hello, this is a test file.', 'utf8');
console.log(`File created: ${filePath}`);

const readContentFromFile = fs.readFileSync(filePath, 'utf8');
console.log(`Content of the file: ${readContentFromFile}`);

fs.appendFileSync(filePath, '\nThis is appended text.');
console.log(`Content after appending: `);

const asyncFilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncFilePath, 'This is an async node js file.', (err) => {
    if (err) throw err; 
        console.log(`Async file created: ${asyncFilePath}`);

    fs.readFile(asyncFilePath, 'utf8', (err, data) => {
        if (err) throw err; 
        console.log(`Content of the async file: ${data}`);

        fs.appendFile(asyncFilePath, '\nThis is another appended text in async file.', (err) => {
            if (err) throw err;
            console.log("New line added to the async file.");

            fs.readFile(asyncFilePath, 'utf8',(err, updatedData) => {
                if(err) throw err;
                console.log(`Updated content of the async file: ${updatedData}`);
            })
        });
    });
});