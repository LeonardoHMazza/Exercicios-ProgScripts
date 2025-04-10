import style from "@/app/cardapio/styles/style.module.css";
import Image from 'next/image'
import Pastel from "@/public/image/pastel.png"
import Acabou from "@/public/image/pastelPretoBranco.png"

export default function Item(props) {

    if(props.quantidade >= 1){
       return (
           <li className={style.card}>
               <div className={style.item}>
                   <h2>{props.titulo}</h2>
                   <Image src={Pastel} alt="Pastel" width={100} height={100} />
                   <h3>{props.preco}</h3>
               </div>
           </li>
       )
    } else {
        return (
            <li className={style.card}>
                <div className={style.acabou}>
                    <h2>{props.titulo}</h2>
                    <Image src={Acabou} alt="Pastel Acabou" width={100} height={100} />
                    <h3>{props.preco}</h3>
                </div>
            </li>
        )
    }
}