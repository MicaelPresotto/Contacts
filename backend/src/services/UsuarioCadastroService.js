class UsuarioCadastroService {
  constructor(db) {
    this.db = db;
  }
  contatos = async () => await db("contatos");
  createContato = async (input) =>
    await (
      await this.db("contatos").insert(input).returning("*")
    )[0];
  updateContato = async (id, input) =>
    await (
      await this.db("contatos").where({ id: id }).update(input).returning("*")
    )[0];

  deleteContato = async (input) => {
    if (input.id) {
      return await this.db("contatos").where({ id: input.id }).delete();
    }
    if (input.email) {
      return await this.db("contatos").where({ email: input.email }).delete();
    }
    throw new Error("Informe o id ou email do contato");
  };
}
const db = require("../database");
module.exports = new UsuarioCadastroService(db);
