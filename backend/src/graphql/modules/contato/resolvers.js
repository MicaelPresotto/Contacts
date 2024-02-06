const db = require("../../../database");

module.exports = {
  Query: {
    contatos: async (_, args, context, info) =>
      await context.usuarioCadastroService.contatos(),
  },
  Mutation: {
    createContato: async (_, { input }, { usuarioCadastroService }) =>
      await usuarioCadastroService.createContato(input),
    updateContato: async (_, { id, input }, { usuarioCadastroService }) =>
      await usuarioCadastroService.updateContato(id, input),
    deleteContato: async (_, { input }, { usuarioCadastroService }) =>
      await usuarioCadastroService.deleteContato(input),
  },
};
