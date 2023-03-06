
export const ContactItem = ({ icon, title, subtitle}) => {

    return(
        <div className='contact__information'>
            <i className={`${icon} contact__icon`}></i>

            <div>
                <h3 className='contact__title'>{title}</h3>
                <span className='contact__subtitle'>{subtitle}</span>
            </div>
        </div>
    )
}