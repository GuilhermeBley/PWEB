const fs = require('fs');

const data = fs.readFile('cidades', (error,data) =>{
        if(error) throw error;
        console.log(data.toString());
    }
);

for(var i = 0; i < 10; i++)
    console.log('segunda parte='+i);