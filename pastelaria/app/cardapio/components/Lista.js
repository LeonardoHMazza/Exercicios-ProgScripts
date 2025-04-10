import style from "../styles/style.module.css";

export default function Lista(props) {
    return (
        <>
            <ul className={style.linha1}>
                {props.children}
            </ul>
        </>
    )
}