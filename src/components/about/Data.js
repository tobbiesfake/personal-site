import { Button } from '../button/Button.js'
import resume from '../../assets/resume/Frontend-Developer_Nguyen-Dang-Phat_Resume.pdf'

export const Data = () => {

    return(
        <div className='about__data'>
            <p className="about__description">
            Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.
            </p>
            <div className="about__info">
                <InfoItem title={'06+'}>
                    Months <br/> experience
                </InfoItem>

                <InfoItem title={'04+'}>
                    Completed <br/> project
                </InfoItem>

                <InfoItem title={'01+'}>
                    Companies <br/> worked
                </InfoItem>
            </div>

            <div className="about__buttons">
                <a download={'Frontend-Developer_Nguyen-Dang-Phat_Resume.pdf'} href={resume}>
                    <Button >
                            Download CV
                            <i className='uil uil-download-alt button__icon'></i>
                    </Button>
                </a>
            </div>
        </div>
    )
}

function InfoItem ({title, children}){
    
    return(
        <div>
            <span className="about__info-title">{title}</span>
            <span className="about__info-name">{children}</span>
        </div>
    )
}