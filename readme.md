
Instalike-Back

https://github.com/djalmasilvajr/instalike-back

Dicas:

1. CloudDB https://cloud.mongodb.com/
1.1. Confirmar se o ip que o cloubdb obteve é realmente o seu ip
      Quando tentei acessar de S.Fidelis, o CloudDB detectou ip 187.19.50.57
      Mas não era esse.  Dava erro: 4998787232:error:10000438:SSL routines:OPENSSL_internal:TLSV1_ALERT_INTERNAL_ERROR:…/…/third_party/boringssl/src/ssl/tls_record.cc:592:SSL alert number 80
      Usei o comando para Invoke-WebRequest ifconfig.me/ip (no windows), curl http://ipinfo.io/ip (linux/mac)  obter o ip correto: 187.19.50.26
      Ou simplesmente acesse o site http://ipinfo.io/ip ou https://ifconfig.me/ e pegue o "IP Address"

  1.1. Confirmar se a senha e usuário da string de conexão são realmente os cadastrados no cloubdb 
       Gera o erro MongoServerError: bad auth : authentication failed

https://cloud.mongodb.com/
npm install mongodb

2. Imagens com url https://placecats.com/

3. https://www.abstractapi.com/

4. Serviços Google
4.1. Google AI Studio https://aistudio.google.com/
4.2. Google Cloud  https://cloud.google.com/free?hl=pt_br 
4.3. Recebimento dos créditos para uso no Google Cloud https://trygcp.dev/e/alura-5f107c-imersao-back-end 
4.4. https://gemini.google.com/

5. código fonte aulas
5.1. aula1 - https://github.com/guilhermeonrails/backend-instabytes/tree/bebe680f2d059218f3256482d23f706df7a690fb 

6. https://cursos.alura.com.br/imersoes/aulas/conectando-sua-api-ao-mongodb-estrutura-conexao-e-refatoracao-c142

7. Usar PostMan para consumir api criada, especialmente do métodos HTML POST e PUT
POST normal (sem arquivo)
7.1. botão new request (confirmar) ou + se já clicou antes em new request
7.2. testar com a uri de teste do PostMan
7.3. testar com uri de get da minha api
7.4. fazer request POST, http://localhost:3000/posts
7.4.1. escolher o verbo "POST" botão lado esquerdo
7.4.2. clicar em "body"
7.4.3. ver o vídeo com os detalhes desta parte, ver a aula

POST de arquivo
7.1. botão new request (confirmar) ou + se já clicou antes em new request
7.2. testar com a uri de teste do PostMan
7.3. testar com uri de get da minha api
7.4. fazer request POST, http://localhost:3000/upload
7.4.1. escolher o verbo "POST" botão lado esquerdo
7.4.2. clicar em "form-data"
7.4.3. na coluna key, digitar a chave que será lida pela api, no curso da alura "imagem"
7.4.4. tirar o foco da célula com "imagem", clicar em "file", e escolher o arquivo
7.4.5. na região de responde (resultado do request), guardar o "insertedId" para usar na url do PUT
7.4.5. exemplo de Json
{ "nome":"dj", "email":"dj@gmail.com"} 

PUT
7.1. botão new request (confirmar) ou + se já clicou antes em new request
7.2. testar com a uri de teste do PostMan
7.3. testar com uri de get da minha api
7.4. fazer request PUT, http://localhost:3000/upload/67407bdb0ab8fb13b01a7586 (insertedId obtido no POST do arquivo)
7.4.1. escolher o verbo "put" botão lado esquerdo
7.4.2. clicar em "Body"
7.4.3. em "Body", clicar em "Raw", e no botão Text, escolher Json
7.4.5. exemplo de Json
{ "nome":"dj", "email":"dj@gmail.com"} 


8. Exercícios propostos pela Luri (AI da Alura)

8.1. criar uma nova rota em seu servidor que retorne um JSON com informações sobre um livro

Claro! Que tal você criar uma nova rota em seu servidor que retorne um JSON com informações sobre um livro? Aqui estão os detalhes do exercício:
Crie uma nova rota: Utilize o método app.get() para criar uma rota chamada /livro.
Retorne um JSON: Quando essa rota for acessada, ela deve retornar um objeto JSON com as seguintes informações:
Título do livro
Autor do livro
Ano de publicação
Gênero

Por exemplo, o JSON pode ser assim:
                 
                    
                        json
                        Copiar código
                    
                    
                        {
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien",
  "ano": 1954,
  "genero": "Fantasia"
}
                    
                
        
Teste a rota: Após implementar, inicie seu servidor e acesse localhost:3000/livro no navegador para ver se o JSON é retornado corretamente.

Esse exercício vai te ajudar a praticar a criação de rotas e o retorno de dados em formato JSON! Boa sorte!

8.5. endpoint para deletar um post existente

Claro! Que tal criar um novo endpoint para deletar um post existente? Exercício Proposto:

Crie um novo método HTTP DELETE no seu controller, que será responsável por deletar um post com base no ID fornecido na URL.
Adicione uma nova rota /posts/:id que utilize esse método DELETE.
No modelo (postsModel.js), implemente uma função que utilize o método deleteOne do MongoDB para remover o post do banco de dados.
Teste a funcionalidade utilizando o Postman, enviando uma requisição DELETE para a rota que você criou, e verifique se o post foi realmente removido do banco de dados.

Esse exercício vai te ajudar a entender melhor como gerenciar a persistência de dados no seu projeto! Se precisar de ajuda, estou aqui!



9. Aulas

Acesse o Google Gemini aqui https://alura.tv/google-gemini
Gere a sua API Key no Google AI Studo aqui. https://alura.tv/google-gemini-api
Guia de Mergulho da Imersão Dev Back-End! https://grupoalura.notion.site/imersao-dev-back-end-guia-de-mergulho
Acesse o Discord https://discord.gg/86zUvgfRjN
Live 25/11 às 18h30 | Do Código ao Mercado: O Futuro da Sua Carreira em Tecnologia https://www.youtube.com/watch?v=clfwxY3Kfss
Npm | dotenv https://www.npmjs.com/package/dotenv
Documentação Google Cloud https://cloud.google.com/docs?hl=pt-br







5a Aula

Nesta última aula, vamos finalizar o projeto, colocando a lógica de armazenamento de imagens no servidor, integrando o Front-End do projeto e, fazendo o deploy do back-end na Google Cloud.

Nesta aula, você vai:
Fazer a lógica de armazenamento de imagens no servidor;
Criar a rota PUT para atualização de post;
Integrar com o Frontend;
Integrar com a API do Gemini;
Fazer o deploy do back-end na Google Cloud.

Link do projeto:
Repositório da aula 05 https://github.com/guilhermeonrails/5-Vb8nXmJ5Q7kZ
Integração do Front-End com o Back-End https://github.com/alura-cursos/imersao-backend-gemini-2024-front/archive/refs/heads/main.zip
Código pronto do serviço do Gemini https://raw.githubusercontent.com/guilhermeonrails/backend-instabytes/refs/heads/aula_5/src/services/geminiService.js
Código Service .sh https://raw.githubusercontent.com/guilhermeonrails/backend-instabytes/refs/heads/aula_5/services.sh

Aprofunde-se nos seguintes tópicos:

O que é CORS - https://www.alura.com.br/artigos/como-resolver-erro-de-cross-origin-resource-sharing

Subindo projeto para o GitHub - https://www.alura.com.br/artigos/o-que-e-git-github

Escrevendo um README no seu GitHub https://www.alura.com.br/artigos/escrever-bom-readme

Mostre a evolução do seu projeto para o mundo compartilhando no LinkedIn e Instagram! Marque a Alura (@AluraOnline) e o Google (@GoogleBrasil). Vamos adorar ver os seus projetos e acompanhar a sua evolução! Lembre-se de utilizar a hashtag #Imersao-Back-End-Google-Gemini para que o seu projeto alcance ainda mais pessoas.