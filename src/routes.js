import { randomUUID } from "node:crypto";
import { Database } from "./database.js";


const database = new Database();

export const routes = [
  {
    method: "GET",
    path: "/users",
  handler: (req, res) => {
      const users = database.select("users");

      return res.end(JSON.stringify(users));
    },
  },

  {
    method: "POST",
    path: "/users",
  handler: (req, res) => {
      const { name, email } = req.body;
      const user = {
        id: randomUUID(),
        name,
        email,
      };

      database.insert("users", user);

      return res.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    path: "/users/:id",
    handler: (req, res) => {
      return res.end();
    },
  },
];

// com o esse arquivo route vou nao preciso ficar adc if no meu servers apenas criar novas notas

// FORMA DO FRONT ENVIAR INFORMACOEES PARA A API

// query parameters :http;//localhost3334 URL:Stateful => filtros, paginacao , nao obg

// route parameters http;//localhost3334/users/1

// route parameters http;//localhost3334/users/1 identificar um recurso e mais
// dependendo de como chama usando usando os metodos http se sabe o motivo

//  request body :envio de informacoes de um formulario https
// nao fica na url

// edicao e remocao dde user
