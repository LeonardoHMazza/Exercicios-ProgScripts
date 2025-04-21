'use client';
import {useState} from 'react';

import Styles from '@/app/page.module.css';
import Botoes from '@/app/components/Botoes';
import Display from '@/app/components/Display';
import buttonStyles from '@/app/components/button.module.css';

export default function Calculadora(){

  const [display, setDisplay] = useState('')
  
  function atualizarDisplay(num) {
    setDisplay(display + num)
  }

  function calcularResultado() {
    try {
      const resultado = display.replace(/÷/g, "/").replace(/×/g, "*");
      setDisplay(eval(resultado).toString());
    }
    catch (error) {
      console.log("A operação não pode ser realizada", error);
      return error
    }
  }

  function limparDisplay(){
    setDisplay('');
  }

  function inverterSinal() {
    if (display) {
      if (display.startsWith("-")) {
        setDisplay(display.slice(1));
      } else {
        setDisplay("-" + display);
      }
    }
  }

  function porcentagem() {
    try {
      const resultado = eval(display.replace(/÷/g, "/").replace(/×/g, "*")) / 100;
      setDisplay(String(resultado));
    } catch (error) {
      setDisplay("Erro");
    }
  }

  function calcularRaiz() {
    try {
      const resultado = Math.sqrt(eval(display.replace(/÷/g, "/").replace(/×/g, "*")));
      setDisplay(String(resultado));
    } catch (error) {
      setDisplay("Erro");
    }
  }

  return (
    <div className={Styles.page}>
      <div className={Styles.calculator}>
        <h1 className={Styles.title}>Calculadora</h1>
          <Display valorDisplay={display} />
          <div className={Styles.buttons}>
              <Botoes valor={"C"} onClick={limparDisplay} className={buttonStyles.red}>C</Botoes>
              <Botoes valor={"√"} onClick={calcularRaiz} className={buttonStyles.green}>√</Botoes>
              <Botoes valor={"%"} onClick={porcentagem} className={buttonStyles.green}>%</Botoes>
              <Botoes valor={"÷"} onClick={atualizarDisplay} className={buttonStyles.green}>÷</Botoes>

              <Botoes valor={7} onClick={atualizarDisplay}>7</Botoes>
              <Botoes valor={8} onClick={atualizarDisplay}>8</Botoes>
              <Botoes valor={9} onClick={atualizarDisplay}>9</Botoes>
              <Botoes valor={"×"} onClick={atualizarDisplay} className={buttonStyles.green}>×</Botoes>

              <Botoes valor={4} onClick={atualizarDisplay}>4</Botoes>
              <Botoes valor={5} onClick={atualizarDisplay}>5</Botoes>
              <Botoes valor={6} onClick={atualizarDisplay}>6</Botoes>
              <Botoes valor={"-"} onClick={atualizarDisplay} className={buttonStyles.green}>-</Botoes>

              <Botoes valor={1} onClick={atualizarDisplay}>1</Botoes>
              <Botoes valor={2} onClick={atualizarDisplay}>2</Botoes>
              <Botoes valor={3} onClick={atualizarDisplay}>3</Botoes>
              <Botoes valor={"+"} onClick={atualizarDisplay} className={buttonStyles.green}>+</Botoes>

              <Botoes valor={"±"} onClick={inverterSinal}>±</Botoes>
              <Botoes valor={0} onClick={atualizarDisplay}>0</Botoes>
              <Botoes valor={"."} onClick={atualizarDisplay}>.</Botoes>
              <Botoes valor={"="} onClick={calcularResultado} className={buttonStyles.equals}>=</Botoes>
          </div>
      </div>
    </div>
  )
}