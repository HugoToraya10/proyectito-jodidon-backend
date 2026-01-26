require('dotenv').config();
const HTTP = require("http");

const PORT = process.env.PORT;
const SERVER = HTTP.createServer(requestController);

SERVER.listen(PORT);

function requestController(){
    console.log("Servidor alojado en el puerto " + PORT);
};