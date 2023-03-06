import { Social } from './Social.js'
import { Data } from './Data.js'
import { ScrollDown } from './ScrollDown.js'
import "./home.css"

export const Home = () => {
    
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__img">
                    </div>
                    <Social/>
                    <Data/>
                </div>
                    <ScrollDown/>
            </div>
        </section>
    )
}