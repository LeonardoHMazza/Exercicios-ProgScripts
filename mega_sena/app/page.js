"use client";

import styles from "./page.module.css";
import Numeros from "./components/Numeros";
import Botao from "./components/Botao";
import useMegaSena from "./components/useMegaSena";

export default function Home() {

  const {numero, handleButtonClick} = useMegaSena();

  return (
    <div className={styles.page}>
      <div className={styles.resultado}>
        <Numeros numeros={numero} />
      </div>

      <Botao valor={"Gerar números"} onClick={handleButtonClick} />
    </div>
  );
}
