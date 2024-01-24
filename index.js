const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const UsuarioCadastroService = require("./src/services/UsuarioCadastroService");

const server = new ApolloServer({
  ...graphql,
  formatError: (error) => {
    if (error.message.startsWith("Informe o id ou email do contato")) {
      return new Error("Informe o id ou email do contato");
    }
    return error;
  },
  context: () => ({
    usuarioCadastroService: UsuarioCadastroService,
  }),
});

server.listen().then(({ url }) => console.log(url));
