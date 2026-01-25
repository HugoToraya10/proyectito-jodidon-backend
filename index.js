const HTTP = require("http");

const SERVER = HTTP.createServer(requestController);

SERVER.listen(4000);

function requestController(){
    console.log("Se detectó una petición al servidor");
};