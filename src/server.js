//fundamentos

import http from "node:http";
// import {randomUUID} from 'node:crypto'
// UUID = id unico e univeral
import { json } from "./middlewares/json.js"; // middlewares é um intercerptador de requisao
// import { route, route } from "./routes.js"; POR ALGUM MOTIVO IMPORTOU ERRADO
import { routes } from "./routes.js";
// import { Database } from "./database.js";


// const users = []; JSON- js object notation

// const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res); //intercerptador smp um req e res

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    return route.handler(req, res);
  }
  return res.writeHead(404).end("not found");
});

//stateful= smp guarda em memoria se derubar a api quebra
//stateless- salva em memoria salva apesar de encerrer local

server.listen(3333, () =>{
console.log('server rodando ')
}
);

// curl http://localhost:3333/users =get
// curl http://localhost:3333/users
// curl curl -X POST http://localhost:3333/users

// http
// metodo http
// url
// GET POST PATCH DELETE

// GET => buscar um recurso do back end
// POST => criar um  recurso no back end
// PUT =>  editar ou atualizar um recurso no back end
// PATCH => Atualizar uma informacao especifica de um recurso no back end
//DELETE => DELETAR UM REQ NO BACK END
//Pressionar Ctrl + K seguido de Ctrl + C (para comentar) ou Ctrl + K seguido de Ctrl + U

// O -X especifica o método HTTP que você está usando.
// O -d é utilizado para passar dados no corpo da requisição, geralmente com POST, PUT ou PATCH.
// // Para DELETE, o -d não é obrigatório, mas pode ser usado se o seu endpoint espera algum dado adicional.
//cabeçalhos (reqyisixao/resposta) =>metadados

//http status code
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)
