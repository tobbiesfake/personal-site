import { ItemLeft } from './ItemLeft.js'
import { ItemRight } from './ItemRight.js'
import { education } from './Data.js'

export const EducationItems = () => {

    const lastIndex = education.length - 1;
    return(
        <div className='qualification__content'>
            {education.map(({title, subtitle, calendar}, index) => {
                if (index % 2 === 0){
                    return (
                        <ItemLeft key={index} isLast={index === lastIndex} title={title} subtitle={subtitle} calendar={calendar}/>
                    )
                }else{
                    return(
                        <ItemRight key={index} isLast={index === lastIndex} title={title} subtitle={subtitle} calendar={calendar}/>
                    )
                }
            })}
        </div>
    )
}