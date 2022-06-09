const fs = require('fs');
const data = fs.readFileSync('cidades');

console.log(data.toString());

for(var i = 0; i < 10; i++)
    console.log('segunda parte='+i);