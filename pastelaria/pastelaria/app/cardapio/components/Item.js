import style from "@/app/cardapio/styles/style.module.css";
import Imagem from "@/app/cardapio/components/Imagem";

export default function Item(props) {
    return (
        <li className={style.card}>
            <div className={style.item}>
                {props.titulo}
                <Imagem />
                {props.preco}
            </div>
        </li>
    )
}