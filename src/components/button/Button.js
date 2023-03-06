import './button.css'
export const Button = ({href, children}) => {

    return (
        <a href={href} className="button button--flex">
            {children}
        </a>
    )
}