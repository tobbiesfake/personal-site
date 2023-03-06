
export const Social = () => {

    return(
        <div className="home__social">
            <SocialIcon 
                href='https://www.linkedin.com/in/tobbies/'
                icon='uil uil-linkedin-alt'
            />
            <SocialIcon 
                href='https://www.github.com/tobbiesfake/'
                icon='uil uil-github-alt'
            />
            <SocialIcon 
                href='https://www.instagram.com/1.1photograph/'
                icon='uil uil-instagram'
            />
        </div>
    )
}

function SocialIcon({ href, icon }) {
    
    return (
        <a href={href} target="_blank" rel="noreferrer" className="home__social-icon">
            <i className={icon}></i>
        </a>
    )
}