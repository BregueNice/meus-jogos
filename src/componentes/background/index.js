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
        },
        {
            url: 'https://www.twitch.tv/directory/category/counter-strike-global-offensive',
            img: 'https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg'
        }

    ]

    const streamerList = [
        {
            url: 'https://www.twitch.tv/yetz',
            img: 'https://i.ibb.co/N6gfxqB/imagem-2023-09-14-124530536.png',
        },
        {
            url: 'https://www.twitch.tv/gragolandia1',
            img: 'https://i.ibb.co/MhrvNz8/imagem-2023-09-14-124906498.png',
        },
    ]

    const minhasRedes = [
        {
            url: 'https://www.instagram.com/breguenice/',
            img: 'https://i.ibb.co/7bppHg5/icons8-instagram-50-1.png'
        },
        {
            url: 'https://twitter.com/breguenice',
            img: 'https://i.ibb.co/2n9pt6q/icons8-twitter-50-1.png%22'
        },
        {
            url: 'https://www.linkedin.com/in/vin%C3%ADcius-gabriel-5a64a519a/',
            img: 'https://i.ibb.co/MZ23h9D/icons8-linkedin-50-1.png'
        }
    ]

    return (
        <div className="bg">
            <Header />
            <section>
                <Card nome='Meus jogos favoritos:' descricao='Os jogos que eu mais jogo diariamente.' />

                {
                    gamesList.map(function (item) {
                        return (
                            <CardChild url={item.url} img={item.img} />
                        )
                    })

                }
            </section>
            <section>
                <Card nome='Meus streamers favoritos:' descricao='Streamers que eu costumo assistir nas horas vagas.' />

                {streamerList.map(function (item) {
                    return (
                        <CardChild url={item.url} img={item.img} class='circular' />
                    )
                })

                }
            </section>
            <section>
                <Card nome='Minhas redes:' descricao='Minhas redes sociais, conecte-se comigo agora mesmo.' />

                {
                    minhasRedes.map(function (item) {
                        return (
                            <CardChild url={item.url} img={item.img}  class='icones'/>
                        )
                    })

                }
            </section>
        </div>
    )
}

export default Background