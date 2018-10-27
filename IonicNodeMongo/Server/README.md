Curso Ionic + Node Js + Mongodb


1) Node Js

1.1) Instalar node 

1.2) Instalar dependências

	$ npm install body-parser compression cors dotenv errorhandler fs mongoose multer path morgan debug nodemon express
	
		* body-parser serve para a gente pegar todo o corpo de um requisição http
		* compression serve para a gente adquirir requisições http 
		* cors para trabalharmos com permissões
		* dotenv para trabalhar com variáveis de ambiente
		* errorhandler é uma biblioteca para mostrar erros
		* express é responsável por toda parte de requições http
		* o fs serve para facilitadar a navegação entre pastas
		* mongoose é a biblioteca que permitirá salvar coisas no banco mongo
		* path para caminhar pelas pastas da aplicação
		* morgan faz parte do express
		* debug caso seja necessário debugarmos alguma coisa
		* nodemon serve para fazer autoreload na aplicação
		

2) mlab.com
		
	Login - senha: afs10 - 

	Criar novo banco: "create new monboDB Deployments"
	Nome do banco: "geosaude-app"
	Usuários - senha: "admin - geosaude2018"
	Testando a conexão com o robomongo: "robo3T" -> "Create" -> copia diretório "ds***.mlab.com" e coloca no "Address", copia a porta
		do mlab e coloca no "Port" -> "Authentication" -> nome do banco que está após o "/", o nome que você deu a aplicação, insere
		no campo "Database" -> insere o usuário cadastrado "admin" e senha "geosaude2018" -> "Auth Mechanism" é "SCHAM-SHA-1" -> salvar 
		
	Coloca string de conexão para a aplicação, colocando em "MONGODB_URI=" no arquivo de ".env", mudar "<dbuser>" pelo usuário criado
		mudar o "<password>" pela senha do usuário 
		
	Vamos iniciar o banco do mongo, com o "npm start"