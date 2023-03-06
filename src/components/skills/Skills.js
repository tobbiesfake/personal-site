import { SkillField } from './SkillField.js'
import { Item } from './Item.js'
import { skillsData } from './Data.js';
import './skills.css';
export const Skills = () => {
    
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skillset</h2>
            <span className="section__subtitle">My technical knowledge</span>

            <div className="skills__container container grid">
                
                {skillsData.map(({icon, title, subtitle, items}) => {
                    return(
                        <SkillField
                            key={title}
                            icon={icon}
                            title={title}
                            subtitle={subtitle}
                        >
                            {items.map(({name, level}) => {
                                return (
                                    <Item key={name} name={name} level={level}/>
                                )
                            })}
                        </SkillField>
                    )
                })}

            </div>
        </section>
    )
}

