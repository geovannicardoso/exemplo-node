// Express (gerencia varias coisas dentro do api "rotas e outros")
// npm i @types/express

//importando tudo do exprees para dentro do express
import * as express from 'express';
// nome da variavel app vai receber o express()
const app = express();
const port = 3000;
//quando meu usuario usar acessar a rota(/) padrão envie uma mensagem como resposta
app.get('/', (request,response) => {
    response.send('hello world!');
});
// qual porta ele vai receber a 
//informação(função listen recebe como argumento 3000 e uma função de retorno uma mensagem)

// Codifique aqui

app.listen(port, () => {
    console.log (`Está funcionando ${port}!`);
});




