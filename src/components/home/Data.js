import { Button } from '../button/Button.js'
export const Data = () => {
    
    return(
        <div className="home__data">
            <h1 className="home__title">Tobbies's Portfolio</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <p className="home__description">
                High level experience in web design & development knowledge, producing quality work.
            </p>
            <Button download={""} href={"#contact"}>
                Contact Me <i className="uil uil-message"></i>
            </Button>
        </div>
    )
}