import Styles from "@/app/page.module.css"

export default function Numeros(props) {
    return (
      <div className={Styles.container}>
        {props.numeros.map((num, index) => (
          <div key={index} className={Styles.numero}>
            {num}
          </div>
        ))}
      </div>
    );
}