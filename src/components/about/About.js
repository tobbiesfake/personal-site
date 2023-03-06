import avatar from '../../assets/img/about.jpg'
import './about.css'
import { Data } from './Data.js'

export const About = () => {

    return(
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img className='about__img' alt="" src={avatar}/>
                <Data/>
            </div>
        </section>
    )
}