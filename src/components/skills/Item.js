export const Item = ({name, level}) => {

    return (
        <div className="skills__data">
                <i className="uil uil-award item-icon"></i>
                <div className="item-info">
                    <h3 className="skills__name">{name}</h3>
                    <p className="skills__level">{level}</p>
                </div>
        </div>
    )
}