export default function Botao(props) {
    return (
        <div>
            <button onClick={props.onClick}>
                {props.valor}
            </button>
        </div>
    )
}