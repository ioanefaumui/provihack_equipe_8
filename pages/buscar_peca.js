import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/pages/BuscarPeca.module.css";

export default function BuscarPeca() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [cidades, setCidades] = useState("");
  const [estados, setEstados] = useState("");

  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);
  const [checkedFive, setCheckedFive] = useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };
  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };
  const handleChangeThree = () => {
    setCheckedThree(!checkedThree);
  };
  const handleChangeFour = () => {
    setCheckedFour(!checkedFour);
  };
  const handleChangeFive = () => {
    setCheckedFive(!checkedFive);
  };

  const Checkbox = ({ label, value, onChange }) => {
    return (
      <>
        <Header />
        <h1 className={styles.title}>Busque sua peça!</h1>
        <div className={styles.divs}>
          <input
            className={styles.inputName}
            name="cidade"
            placeholder="Digite a cidade"
            required
            onChange={(event) => setCidades(event.target.value)}
          />

          <input
            className={styles.inputTem}
            name="estados"
            placeholder="UF"
            required
            onChange={(event) => setEstados(event.target.value)}
          />
          <div className={styles.checkbox}>
            <Checkbox
              label="maculino"
              value={checkedOne}
              onChange={handleChangeOne}
            />
            <Checkbox
              label="feminino"
              value={checkedTwo}
              onChange={handleChangeTwo}
            />
            <Checkbox
              label="Unissex"
              value={checkedThree}
              onChange={handleChangeThree}
            />
            <Checkbox
              label="novo"
              value={checkedFour}
              onChange={handleChangeFour}
            />
            <Checkbox
              label="Usado"
              value={checkedFive}
              onChange={handleChangeFive}
            />
          </div>
          <button className={styles.button} type="submit">
            Buscar!
          </button>
        </div>
        <Footer />
      </>
    );
  };
}
