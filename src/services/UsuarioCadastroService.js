const db = require("../database");

class UsuarioCadastroService {
  contatos = async () => await db("contatos");
  createContato = async (input) =>
    await (
      await db("contatos").insert(input).returning("*")
    )[0];
  updateContato = async (id, input) =>
    await (
      await db("contatos").where({ id: id }).update(input).returning("*")
    )[0];

  deleteContato = async (input) => {
    if (input.id) {
      return await db("contatos").where({ id: input.id }).delete();
    }
    if (input.email) {
      return await db("contatos").where({ email: input.email }).delete();
    }
    throw new Error("Informe o id ou email do contato");
  };
}

module.exports = new UsuarioCadastroService();
