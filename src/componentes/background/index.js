import "../background/styles.css"
import Card from "../card"
import CardChild from "../card-child"
import Header from '../header'

const Background = () => {

    const gamesList = [
        {
            url: 'https://www.twitch.tv/directory/category/league-of-legends',
            img: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg',

        },
        {
            url: 'https://www.twitch.tv/directory/category/valorant',
            img: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg',
        },
        {
            url: 'https://www.twitch.tv/directory/category/minecraft', img: 'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg',
        }

    ]

    return (
        <div className="bg">
            <Header />
            <section>
                <Card nome='Meus jogos favoritos:' />

                {
                    gamesList.map(function (item) {
                        return (
                            <CardChild url={item.url} img={item.img} />
                        )
                    })

                }
            </section>
            <section>
                <Card nome='Meus streamers favoritos:' />

                <CardChild url='https://www.twitch.tv/yetz' img='https://i.ibb.co/N6gfxqB/imagem-2023-09-14-124530536.png' class='circular' />

                <CardChild url='https://www.twitch.tv/gragolandia1' img='https://i.ibb.co/MhrvNz8/imagem-2023-09-14-124906498.png' class='circular' />


            </section>
        </div>
    )
}

export default Background