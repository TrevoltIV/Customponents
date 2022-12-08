



export default function CNavMenuBtn(props) {

    if (props.size == null) {
        return (
            <div className="customponents-nav-menu-btn nav-menu-btn-md">
                <a href={props.href}>{props.children}</a>
            </div>
        )
    } else if (props.size == "sm") {
        return (
            <div className="customponents-nav-menu-btn nav-menu-btn-sm">
                <a href={props.href}>{props.children}</a>
            </div>
        )
    } else if (props.size == "md") {
        return (
            <div className="customponents-nav-menu-btn nav-menu-btn-md">
                <a href={props.href}>{props.children}</a>
            </div>
        )
    } else if (props.size == "lg") {
        return (
            <div className="customponents-nav-menu-btn nav-menu-btn-lg">
                <a href={props.href}>{props.children}</a>
            </div>
        )
    } else {
        return (
            <div className="customponents-error-wrapper">
                <h1>Error: Unknown size property "{props.size}"</h1>
                <h3>on component: CNavMenuBtn</h3>
                <h4>Available sizes: sm, md, lg</h4>
            </div>
        )
    }
}