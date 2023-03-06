import cover from '../../assets/img/pose.png'
import './hire.css'

export const Hire = () => {

    return(
        <section className="hire section">
            <div className="hire__bg">
                <div className="hire__container container grid">
                    <div className="hire__data">
                        <h2 className="hire__title">You have an interesting ideal</h2>
                        <p className="hire__description">Contact me now and bring this to the moon</p>
                        <a href="#contact" className="hire__button button button--flex button--white">
                            Contact me
                            <i className="uil uil-message hire__icon button__icon"></i>
                        </a>
                    </div>

                    <img src={cover} alt="" className="hire__img"></img>
                </div>
            </div>
        </section>
    )
}