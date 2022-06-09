var htpp = require('http');
var server = htpp.createServer(function(req,resp){
    resp.end("<html><body>Site fatec sorocaba</body></html>");
});
server.listen(3000);