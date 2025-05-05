import { useState } from "react";

export default function useMegaSena() {
  const [numero, setNumero] = useState([0, 0, 0, 0, 0, 0]);

  function handleButtonClick() {
    const numeros = [];

    while (numeros.length < 6) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;

      if (!numeros.includes(numeroAleatorio)) {
        numeros.push(numeroAleatorio);
      }
    }

    setNumero(numeros);
  }

  return { numero, handleButtonClick };
}
