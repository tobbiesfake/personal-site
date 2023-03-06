import { links, socials } from "./Data.js"
import './footer.css';

export const Footer = () => {


    return(
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Tobbies</h1>
                        <span className="footer__subtitle">Frontend Developer</span>
                    </div>

                    <ul className="footer__links">
                        {links.map(({href, value}) => {
                            return(
                               <li key={href}>
                                    <a href={href} className={'footer__link'}>{value}</a>
                               </li> 
                            )
                        })}
                    </ul>

                    <div className="footer__socials">

                        {socials.map(({href, icon}) => {
                            return(
                                <a key={href} href={href} className="footer__social">
                                    <i className={icon}></i>
                                </a>
                            )
                        })}
                    </div>
                </div>
                <p className="footer__copy">&#169; Tobbies. All right reserved</p>
            </div>
        </footer>
    )
}