import { useState } from "react";
import "./header.css"

export const Header = () => {
    const [isShow, setIsShow] = useState(false);
    const handleToggleShow = () => {
        setIsShow(!isShow);
    }
    return(
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#header" className="nav__logo">Tobbies</a>
                
                <div className={`nav__menu ${isShow && 'show-menu'}`} id="nav-menu">
                    <ul className="nav__list grid">
                        <Item isActive={true} handleClick={handleToggleShow} href='#home' icon='uil uil-estate' tag ='Home'/>
                        <Item handleClick={handleToggleShow} href='#about' icon='uil uil-user' tag ='About'/>
                        <Item handleClick={handleToggleShow} href='#skills' icon='uil uil-file-alt' tag ='Skills'/>
                        <Item handleClick={handleToggleShow} href='#services' icon='uil uil-briefcase' tag ='Services'/>
                        <Item handleClick={handleToggleShow} href='#portfolio' icon='uil uil-scenery' tag ='Portfolio'/>
                        <Item handleClick={handleToggleShow} href='#contact' icon='uil uil-message' tag ='Contact'/>
                    </ul>                    
                </div>

                <i
                    style={isShow ? {display: ''} : {display: 'none'}}
                    onClick={handleToggleShow}
                    className="uil uil-times nav__close" 
                    id="nav-close">
                </i>

                <div className="nav__btns">
                    <i className="uil uil-moon change-theme" id="theme-button"></i>

                    {!isShow &&(<div 
                        onClick={handleToggleShow}
                        className="nav__toggle" id="nav-toggle"
                        >
                        <i className="uil uil-apps"></i>
                    </div>)}
                </div>
            </nav>
        </header>
    )
}

function Item({handleClick, href, icon, tag, isActive}) {

    return (
        <li onClick={handleClick} className="nav__item">
            <a href={href} className={`nav__link ${isActive && 'active-link'}`}>
                <i className={`${icon} nav__icon`}></i> {tag}
            </a>
        </li>
    )
}