import imagem from './eu.jpg'
import "../header/styles.css"

export default function Header() {
    return (
        <div className='a'>
            <img src={imagem} className='avatar'/>
        </div>
    )
}