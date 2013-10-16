/*global require, process*/

var connect = require('connect'), app, http = require('http');

process.stdout.write("\033[33mIniciando Servidor...\n");

app = connect()
    .use(connect.compress())
    .use(connect.static(__dirname))
    .use(connect.logger('short'));


http.createServer(app).listen(9000, function () {
    process.stdout.write("\033[32mServidor executando no endereço: \033[34mhttp://localhost:9000/\n");
});
