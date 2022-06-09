var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign().include('app/routes').into(app); // incluindo a pasta routes como se fosse namespaces do c#, pega os módulos e inclui no servidor app

module.exports = app; 
