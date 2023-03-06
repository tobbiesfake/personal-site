export const ServicePanel = ({handleDetail, icon, title, children}) => {

    return(
        <div className='services__content'>
            <div>
                <i className={`${icon} services__icon`}></i>
                <h3 className='services__title'>{title}</h3>
            </div>

            <span onClick={handleDetail} className='button button--flex button--small button--link services__button'>
                View more
                <i className='uil uil-arrow-right button__icon'></i>
            </span>

            {children}
        </div>
    )
}