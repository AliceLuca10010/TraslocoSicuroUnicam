var express = require("express"); 
var bodyParser = require("body-parser");
const server = express(); //chiamata al server
const porta = 3000; //la porta
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));
server.listen(porta,function(){ //inserisco cosa fa il server quando lo richiamo
console.log("server in ascolto sulla porta " + porta);

});

server.set("view engine", "ejs"); //fa usare come view ejs invece che html
server.get("/", function(req,res){

res.render("homepage"); //prova
});

server.post("/", function(req, res){

console.log(req.body.email);
console.log(req.body.password);
res.redirect("/");

});

//Commento di prova tre
