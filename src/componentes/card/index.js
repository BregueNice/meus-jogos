import "../card/styles.css"
import CardChild from "../card-child"

export default function Card(props) {
    return (
        <div>
            <h2>{props.nome}</h2>
        </div>
    )
}