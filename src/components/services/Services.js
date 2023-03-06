import { useState } from 'react';
import './services.css';
import { ServicePanel } from './ServicePanel.js';
import { ServiceModal } from './ServiceModal.js';
import { servicesData } from './Data.js'


export const Services = () => {
    const [detail, setDetail] = useState('frontend');
    const handleCloseDetail = () => {
        setDetail(null);
    }
    const data = servicesData;
    return(
        <section className='services section' id='services'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What I offer?</span>

            <div className='services__container container grid'>
                {data.map(({keyItem, icon, title, items}) => {
                    return (
                    <ServicePanel key={keyItem} handleDetail={() => {setDetail(keyItem)}} icon={icon} title={title}>
                        {detail === keyItem &&
                        <ServiceModal handleClose={handleCloseDetail} title={title}>
                            {items}
                        </ServiceModal>}
                    </ServicePanel>)
                })}
            </div>
            
        </section>
    )
}