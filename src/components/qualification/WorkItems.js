import { ItemLeft } from './ItemLeft.js'
import { ItemRight } from './ItemRight.js'
import { work } from './Data.js'

export const WorkItems = () => {
    const lastIndex = work.length - 1;

    return(
        <div className='qualification__content'>
            {work.map(({title, subtitle, calendar}, index) => {
                if (index % 2 === 0){
                    return (
                        <ItemRight isLast={index === lastIndex} title={title} subtitle={subtitle} calendar={calendar}/>
                    )
                }else{
                    return(
                        <ItemLeft isLast={index === lastIndex} title={title} subtitle={subtitle} calendar={calendar}/>
                    )
                }
            })}
        </div>
    )
}