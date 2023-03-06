
export const SkillField = ({icon, title, subtitle, children}) => {

    return (
        <div className="skills__content">
            <div className="skills__header">
                <i className={`${icon} skills__icon`}></i>
                <div>
                    <h1 className="skills__title">{title}</h1>
                    <span className="skills__subtitle">{subtitle}</span>
                </div>
            </div>

            <div className="skills__list grid">
                {children}
            </div>
        </div>
    )
}