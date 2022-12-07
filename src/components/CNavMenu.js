import { useState}  from 'react';


export default function CNavMenu(props) {
    const [open, setOpen] = useState(false);
    
    if (props.type == null) {
        if (props.size == null) {
            return (
                <div className="customponents-menu menu-md">
                    {props.children}
                </div>
            )
        } else if (props.size == "sm") {
            return (
                <div className="customponents-menu menu-sm">
                    {props.children}
                </div>
            )
        } else if (props.size == "md") {
            return (
                <div className="customponents-menu menu-md">
                    {props.children}
                </div>
            )
        } else if (props.size == "lg") {
            return (
                <div className="customponents-menu menu-lg">
                    {props.children}
                </div>
            )
        } else if (props.size == "xl") {
            return (
                <div className="customponents-menu menu-xl">
                    {props.children}
                </div>
            )
        } else if (props.size == "xxl") {
            return (
                <div className="customponents-menu menu-xxl">
                    {props.children}
                </div>
            )
        } else if (props.size == "3xl") {
            return (
                <div className="customponents-menu menu-3xl">
                    {props.children}
                </div>
            )
        } else {
            return (
                <div className="customponents-error-wrapper">
                    <h1>Error: Unknown size property "{props.size}"</h1>
                    <h3>on component: CNavMenu</h3>
                    <h4>Available sizes: sm, md, lg, xl, xxl, 3xl</h4>
                </div>
            )
        }
    } else if (props.type == "classic") {
        if (props.size == null) {
            return (
                <div className="customponents-menu menu-md classic">
                    {props.children}
                </div>
            )
        } else if (props.size == "sm") {
            return (
                <div className="customponents-menu menu-sm classic">
                    {props.children}
                </div>
            )
        } else if (props.size == "md") {
            return (
                <div className="customponents-menu menu-md classic">
                    {props.children}
                </div>
            )
        } else if (props.size == "lg") {
            return (
                <div className="customponents-menu menu-lg classic">
                    {props.children}
                </div>
            )
        } else if (props.size == "xl") {
            return (
                <div className="customponents-menu menu-xl classic">
                    {props.children}
                </div>
            )
        } else if (props.size == "xxl") {
            return (
                <div className="customponents-menu menu-xxl classic">
                    {props.children}
                </div>
            )
        } else if (props.size == "3xl") {
            return (
                <div className="customponents-menu menu-3xl classic">
                    {props.children}
                </div>
            )
        } else {
            return (
                <div className="customponents-error-wrapper">
                    <h1>Error: Unknown size property "{props.size}"</h1>
                    <h3>on component: CNavMenu</h3>
                    <h4>Available sizes: sm, md, lg, xl, xxl, 3xl</h4>
                </div>
            )
        }
    } else if (props.type == "dropdown") {
        if (props.size == null) {
            return (
                <div className="customponents-menu menu-md dropdown">
                    {props.children}
                </div>
            )
        } else if (props.size == "sm") {
            return (
                <div className="customponents-menu menu-sm dropdown">
                    {props.children}
                </div>
            )
        } else if (props.size == "md") {
            return (
                <div className="customponents-menu menu-md dropdown">
                    {props.children}
                </div>
            )
        } else if (props.size == "lg") {
            return (
                <div className="customponents-menu menu-lg dropdown">
                    {props.children}
                </div>
            )
        } else if (props.size == "xl") {
            return (
                <div className="customponents-menu menu-xl dropdown">
                    {props.children}
                </div>
            )
        } else if (props.size == "xxl") {
            return (
                <div className="customponents-menu menu-xxl dropdown">
                    {props.children}
                </div>
            )
        } else if (props.size == "3xl") {
            return (
                <div className="customponents-menu menu-3xl dropdown">
                    {props.children}
                </div>
            )
        } else {
            return (
                <div className="customponents-error-wrapper">
                    <h1>Error: Unknown size property "{props.size}"</h1>
                    <h3>on component: CNavMenu</h3>
                    <h4>Available sizes: sm, md, lg, xl, xxl, 3xl</h4>
                </div>
            )
        }
    } else {
        return (
            <div className="customponents-error-wrapper">
                <h1>Error: Unknown type property "{props.type}"</h1>
                <h3>on component: CNavMenu</h3>
                <h4>Available types: classic, dropdown</h4>
            </div>
        )
    }
}