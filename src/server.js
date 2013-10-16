/*global require, process*/

var connect = require('connect');
process.stdout.write("\033[33mIniciando Servidor de desenvolvimento...\n");
connect.createServer(connect.static(__dirname)).use(connect.logger('dev')).listen(8088, function () {
    process.stdout.write("\033[32mServidor executando no endereço: \033[34mhttp://localhost:8088/\n");
});
