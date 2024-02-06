import { gql } from "@apollo/client";

export const GET_CONTATOS = gql`
  query {
    contatos {
      id
      nome
      email
      telefone
    }
  }
`;
export const ADD_CONTATO = gql`
  mutation createContato($nome: String!, $email: String!, $telefone: String!) {
    createContato(input: { nome: $nome, email: $email, telefone: $telefone }) {
      id
      nome
      email
      telefone
    }
  }
`;

export const DELETE_CONTATO = gql`
  mutation deleteContato($id: Int!) {
    deleteContato(input: { id: $id })
  }
`;

// export const UPDATE_CONTATO = gql`
//   mutation ($id: Int!, $nome: String, $email: String, $telefone: String) {
//     updateContato(
//       id: $id
//       input: { nome: $nome, email: $email, telefone: $telefone }
//     ) {
//       id
//       nome
//       email
//       telefone
//     }
//   }
// `;
