

export const Slide = ({img, alt, href, title, description}) => {

    return(
        <div className='portfolio__content grid'>
            <div className="portfolio__img-container">
                <img src={img} alt={alt} className='portfolio__img'/>
            </div>

            <div className='portfolio__data'>
                <h3 className='portfolio__title'>{title}</h3>
                <p className='portfolio__description'>{description}</p>
                <a className='button button--flex button--small portfolio__button' href={href} target={'_blank'} rel={'noreferrer'} >
                    Demo
                    <i className='uil uil-arrow-right button__icon'></i>
                </a>
            </div>
        </div>
    )
}