import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import FormularioProducts from "../components/FormularioProducts";

export default function Home() {
  return (
    <>
      <FormularioProducts />
    </>
  );
}
