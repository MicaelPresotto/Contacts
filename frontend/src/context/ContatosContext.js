import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { GET_CONTATOS, ADD_CONTATO, DELETE_CONTATO } from "../graphql";

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
  return (
    <myContext.Provider
      value={{
        contatos: {
          itens: data ? data.contatos : [],
          loading,
          createContato,
          deleteContato,
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
