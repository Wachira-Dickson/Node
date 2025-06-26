

const firstModule = require('./first-module');

console.log(firstModule.add(45, 10));

try {

    console.log('trying to divide by zero');
    let result = firstModule.divide(0, 0);
    console.log('Result:', result);

} catch (error) {
    console.error('Error:', error.message);
}

//module wrapper
(
    function (exports, require, module, __filename, __dirname) {
        
    }
)