import { gql } from "graphql-request";

export const LISTA_ROUPAS = gql`
  query {
    roupas {
      estadoDeUso
      imagem {
        url
      }
      tamanho
      cor
      disponivel
      estadoDeUso
      descricao
      cidade
      estado
    }
  }
`;

export const LISTA_PROFISSIONAIS = gql`
  query {
    profissionals {
      nome
      id
      cidade
      estado
      valor
      imagem {
        url
      }
    }
  }
`;
