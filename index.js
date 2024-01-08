var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.createServer(app);
var https, httpsServer;

// Verifica si estamos en producción y carga los certificados si es necesario
if (process.env.NODE_ENV === 'production' && process.env.SSL_KEY_PATH && process.env.SSL_CERT_PATH) {
    var fs = require('fs');
    https = require('https');
    var privateKey  = fs.readFileSync(process.env.SSL_KEY_PATH, 'utf8');
    var certificate = fs.readFileSync(process.env.SSL_CERT_PATH, 'utf8');
    var credentials = {key: privateKey, cert: certificate};
    httpsServer = https.createServer(credentials, app);
}

// Iniciar servidores
if (httpsServer) {
    httpsServer.listen(443, function(){
        console.log('Server is listening on https://localhost:443');
    });
}
httpServer.listen(81, function(){
    console.log('Server is listening on http://localhost:80');
});