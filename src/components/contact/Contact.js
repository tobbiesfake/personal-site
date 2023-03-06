import './contact.css';
import { ContactItem } from './ContactItem.js';
import { Form } from './Form.js';

export const Contact = () => {

    return(
        <section className='contact section' id='contact'>
            <h2 className='section__title'>Contact Me</h2>
            <span className='section__subtitle'>Get in touch</span>

            <div className='contact__container container grid'>
                <div>
                    <ContactItem icon={'uil uil-phone'} title={'Call Me'} subtitle={'(+84)981227712'}/>
                    <ContactItem icon={'uil uil-envelope'} title={'Email'} subtitle={'dangphat.job@gmail.com'}/>
                    <ContactItem icon={'uil uil-map-marker'} title={'Location'} subtitle={'Ho Chi Minh City, Vietnam'}/>
                </div>
                <Form/>
            </div>
        </section>
    )
}