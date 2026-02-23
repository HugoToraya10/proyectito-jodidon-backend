require('dotenv').config();
const HTTP = require("http");
const fs = require("fs");

const PORT = process.env.PORT;
const SERVER = HTTP.createServer(requestController);

SERVER.listen(4000);

function requestController(req, res){
    
    const url = req.url;
    const method = req.method;
    console.log({url, method});

    if (method === 'GET' && url === '/' ){
        res.setHeader("content-type", "text/html; charset=utf-8")
        fs.readFile("./public/index.html",function(err, alfredo){
            if(err){
                console.log('Hubo un error');
            }
        res.write(alfredo);
        res.end();

        });
        return;
    }


    if (method === 'GET' && url === '/about'){
        res.setHeader("content-type", "text/html; charset=utf-8");
        res.write("Estás en el about");
        res.end();
        return;
    }

        if (method === 'GET' && url === '/favicon.ico'){
        res.setHeader("content-type", "text/html; charset=utf-8");
        res.write("deam paco");
        res.end();
        return;
    }

    res.write("cinga tu madre");
    res.end();
    return;
};