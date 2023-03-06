export const Tab = ({isActive, handleClick, icon, title}) => {

    return(
        <div onClick={handleClick} className={`${isActive && 'qualification__active'} qualification__button button--flex`}>
            <i className={`${icon} qualification__icon`}></i>
            {title}
        </div>
    )
}