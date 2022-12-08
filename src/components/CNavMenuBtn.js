



export default function CNavMenuBtn(props) {

    return (
        <div className="customponents-nav-menu-btn nav-menu-btn-md">
            <a href={props.href}>{props.children}</a>
        </div>
    )
}