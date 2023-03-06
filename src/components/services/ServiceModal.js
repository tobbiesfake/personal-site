
export const ServiceModal = ({handleClose, title, children}) => {
    return(
        <div className='services__modal'>
                <div className='services__modal-content'>
                    <h4 className='services__modal-title'>{title}</h4>
                    <i onClick={handleClose} className='uil uil-times services__modal-close'></i>

                    <ul className='services__modal-services grid'>
                        {children}
                    </ul>
                </div>
            </div>
    )
}