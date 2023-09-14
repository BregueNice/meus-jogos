import "../card-child/styles.css"

export default function CardChild(props) {
    return (
        <a href={props.url} target="_blank">
            <img src={props.img} className={props.class}/>
        </a>
    )
}