import { useState } from 'react';
import './qualification.css';
import { Tab } from './Tab.js';
import { EducationItems } from './EducationItems.js';
import { WorkItems } from './WorkItems.js';

export const Qualification = () => {
    const [isEducation, setIsEducation] = useState(true);
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className='qualification__tabs'>
                    <Tab isActive={isEducation} handleClick={() => {setIsEducation(true)}} icon={'uil uil-graduation-cap'} title={'Education'}/>
                    <Tab isActive={!isEducation} handleClick={() => {setIsEducation(false)}} icon={'uil uil-briefcase-alt'} title={'Work'}/>
                </div>

                <div className='qualification__section'>
                    {isEducation ? <EducationItems/> : <WorkItems/>}
                </div>
            </div>
        </section>
    )
}