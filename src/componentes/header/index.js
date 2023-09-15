import imagem from './eu.jpg'
import "../header/styles.css"

export default function Header() {
    return (
        <div className='header'>
            <img src={imagem} className='avatar'/>
        </div>
    )
}