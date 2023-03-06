

export const ServiceItem = ({ data }) => {

    return(
        <li className='services__modal-service'>
            <i className='uil uil-check-circle services__modal-icon'></i>
            <p>{data}</p>
        </li>
    )
}