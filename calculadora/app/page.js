import styles from '@/app/page.module.css'
import Botoes from "@/app/components/Botoes";

export default function Calculadora(){
  return (
      <div className={styles.page}>
          <h1>Calculadora</h1>
          <Botoes valor={1} onClick={() => console.log("1")}>1</Botoes>
      </div>
  )
}