

export const FormInput = ({label, type}) => {

    return(
        <div className="contact__content">
            <label className="contact__label">{label}</label>
            <input type={type} className="contact__input"/>
        </div>
    )
}