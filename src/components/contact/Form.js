import { FormInput } from "./FormInput.js"

export const Form = () => {
    
    return(
        <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
                <FormInput label={'Name'} type={'text'}/>
                <FormInput label={'Email'} type={'email'}/>
            </div>

            <FormInput label={'Project'} type={'text'}/>
            <div className="contact__content">
                <label className="contact__label">Name</label>
                <textarea name="" id="" cols={0} rows={7} className={'contact__input'}/>
            </div>
            <div>
                <a href="#contact" className="button button--flex">
                    Send Message
                    <i className="uil uil-message button__icon"></i>
                </a>
            </div>
        </form>
    )
}