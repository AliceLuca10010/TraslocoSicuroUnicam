var express = require("express"); 
var bodyParser = require("body-parser");
const server = express(); //chiamata al server
const porta = 2000; //la porta
server.use(express.static("public"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));
server.listen(porta,function(){ //inserisco cosa fa il server quando lo richiamo
console.log("server in ascolto sulla porta " + porta);

});

server.set("view engine", "ejs"); //fa usare come view ejs invece che html
server.get("/", function(req,res){

res.render("home");
});

server.get("/chiSiamo", function(req,res){

res.render("chiSiamo");
});
server.get("/doveSiamo", function(req,res){

res.render("doveSiamo");
});
server.get("/comeFunziona", function(req,res){

res.render("comeFunziona");
});
server.get("/conChiLavoriamo", function(req,res){

res.render("conChiLavoriamo");
});
server.get("/condizioniDiVendita", function(req,res){

res.render("condizioniDiVendita");
});
server.get("/contattaci", function(req,res){

res.render("contattaci");
});
server.get("/informativaSullaPrivacy", function(req,res){

res.render("informativaSullaPrivacy");
});
server.get("/servizi", function(req,res){

res.render("servizi");
});


