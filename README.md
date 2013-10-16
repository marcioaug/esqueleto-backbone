

    Certifique-se de ter as seguintes ferramentas instaladas:

    * nodejs >= v0.10
    * npm  >= 1.3

    Obs.: Para instalar as versões mais recentes do Node.js e npm em distribuições linux siga umas das técnicas
    descritas na seguinte página: https://gist.github.com/isaacs/579814

    No Ubuntu para as técnicas que exigem a compilação do Node.js instale o pacote build-essential.
            $ sudo apt-get install build-essential

    Para as técnicas que necessitam baixar o código-fonte:
            $ sudo apt-get install curl

        echo 'export PATH=$HOME/local/bin:$PATH' >> ~/.bashrc
        . ~/.bashrc
        mkdir ~/local
        mkdir ~/node-latest-install
        cd ~/node-latest-install
        curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1
        ./configure --prefix=~/local
        make install # ok, fine, this step probably takes more than 30 seconds...
        curl https://npmjs.org/install.sh | sh



    1) Baixe o código no repositório subversion:

        $ git clone https://github.com/seu_usuário/th-web.git

    2) Instale o Bower e Grunt.js

        $ npm install -g grunt-cli bower

    3) Baixe as dependências necessárias:

        $ bower install
        $ grunt install

    4) Faça a build antes de começar o desenvolvimento para copiar as dependências necessárias antes de rodar o projeto.

        $ grunt build

    5) Execute o servidor:

        $ node src/server.js


    Obs.: Os passos 3, 4 e 5 devem ser executados no diretório raiz do projeto.


    SOLUÇÕES DE PROBLEMAS
    ---------------------

    1) Durante a execução do grunt, se aparece uma mensagem como no exemplo abaixo:

        >> Local Npm module "grunt-contrib-jshint" not found. Is it installed?
        Warning: Task "jshint" not found. Use --force to continue.

        Aborted due to warnings.

        Process finished with exit code 3

        SOLUÇÃO: Execute novamente o comando $ npm install no diretório raiz do projeto.













