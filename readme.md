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

4. Google AI Studio https://aistudio.google.com/

5. https://gemini.google.com/

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



8.5. endpoint para deletar um post existente

Claro! Que tal criar um novo endpoint para deletar um post existente? Exercício Proposto:

Crie um novo método HTTP DELETE no seu controller, que será responsável por deletar um post com base no ID fornecido na URL.
Adicione uma nova rota /posts/:id que utilize esse método DELETE.
No modelo (postsModel.js), implemente uma função que utilize o método deleteOne do MongoDB para remover o post do banco de dados.
Teste a funcionalidade utilizando o Postman, enviando uma requisição DELETE para a rota que você criou, e verifique se o post foi realmente removido do banco de dados.

Esse exercício vai te ajudar a entender melhor como gerenciar a persistência de dados no seu projeto! Se precisar de ajuda, estou aqui!


