




export default function CLogo(props) {
    
    if (props.href == null) {
        return (
            <div className="customponents-logo-3xl">
                <img className="customponents-logo-img" src={props.src} alt={props.alt} />
            </div>
        )
    } else {
        return (
            <div className="customponents-logo-3xl">
                <a className="customponents-logo-link" href={props.href}>
                    <img className="customponents-logo-img" src={props.src} alt={props.alt} />
                </a>
            </div>
        )
    }
}