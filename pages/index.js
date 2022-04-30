import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import FormularioProducts from "../components/FormularioProducts";

export default function Home() {
  const [descricao, setDescricao] = useState("");
  const [estadoDeUso, setEstadoDeUso] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [imagem, setImagem] = useState("");
  const [cor, setCor] = useState("");
  const [disponivel, setDisponivel] = useState("");

  if (descricao.value == "") {
    return "Por favor, digite a descrição do produto";
  }
  if (tamanho.value == "") {
    return "Está faltando o tamanho do Item";
  }
  if (cor.value == "") {
    return "Está faltando a cor";
  }

  return <FormularioProducts />;
}
