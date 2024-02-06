import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import {
  GET_CONTATOS,
  ADD_CONTATO,
  DELETE_CONTATO,
  UPDATE_CONTATO,
} from "../graphql";

const myContext = React.createContext();

const cacheCreateContato = {
  update(cache, { data }) {
    const newContatoResponse = data?.createContato;
    const existingContatos = cache.readQuery({ query: GET_CONTATOS });

    cache.writeQuery({
      query: GET_CONTATOS,
      data: {
        contatos: [...existingContatos.contatos, newContatoResponse],
      },
    });
  },
};

export default function ContatosContextProvider({ children }) {
  const { data, loading } = useQuery(GET_CONTATOS);
  const [createContato] = useMutation(ADD_CONTATO, cacheCreateContato);
  const [deleteContato] = useMutation(DELETE_CONTATO);
  const [updateContato] = useMutation(UPDATE_CONTATO);

  const [refNome, refEmail, refTelefone, refId] = useMyRef(4);

  function handleSubmit(event) {
    event.preventDefault();
    if (refId.current.value) {
      updateContato({
        variables: {
          id: parseInt(refId.current.value),
          nome: refNome.current.value,
          email: refEmail.current.value,
          telefone: refTelefone.current.value,
        },
      });
      refId.current.value = "";
    } else {
      createContato({
        variables: {
          nome: refNome.current.value,
          email: refEmail.current.value,
          telefone: refTelefone.current.value,
        },
      });
    }

    refNome.current.value = "";
    refEmail.current.value = "";
    refTelefone.current.value = "";
  }

  function handleUpdate(item) {
    refId.current.value = item.id;
    refNome.current.value = item.nome;
    refEmail.current.value = item.email;
    refTelefone.current.value = item.telefone;
  }
  return (
    <myContext.Provider
      value={{
        contatos: {
          itens: data ? data.contatos : [],
          loading,
          deleteContato,
        },
        form: {
          handleSubmit,
          handleUpdate,
          refId,
          refNome,
          refEmail,
          refTelefone,
        },
      }}
    >
      {children}
    </myContext.Provider>
  );
}

export function useContatosContext() {
  return React.useContext(myContext);
}

function useMyRef(size) {
  return Array(size)
    .fill(0)
    .map((_) => React.createRef());
}
