


export default function CHeader(props) {

    if (props.type == null) {
        if (props.size == null) {
            return (
                <div className="customponents-header header-md">
                    {props.children}
                </div>
            )
        } else if (props.size == "sm") {
            return (
                <div className="customponents-header header-sm">
                    {props.children}
                </div>
            )
        } else if (props.size == "md") {
            return (
                <div className="customponents-header header-md">
                    {props.children}
                </div>
            )
        } else if (props.size == "lg") {
            return (
                <div className="customponents-header header-lg">
                    {props.children}
                </div>
            )
        } else if (props.size == "xl") {
            return (
                <div className="customponents-header header-xl">
                    {props.children}
                </div>
            )
        } else if (props.size == "xxl") {
            return (
                <div className="customponents-header header-xxl">
                    {props.children}
                </div>
            )
        } else if (props.size == "3xl") {
            return (
                <div className="customponents-header header-3xl">
                    {props.children}
                </div>
            )
        } else if (props.size == "4xl") {
            return (
                <div className="customponents-header header-4xl">
                    {props.children}
                </div>
            )
        } else if (props.size == "5xl") {
            return (
                <div className="customponents-header header-5xl">
                    {props.children}
                </div>
            )
        } else if (props.size == "6xl") {
            return (
                <div className="customponents-header header-6xl">
                    {props.children}
                </div>
            )
        } else {
            return (
                <>
                    <div className="customponents-error-wrapper">
                        <h1>Error: Unkown size property "{props.size}"</h1>
                        <h3>on component: CHeader</h3>
                        <h4>Available sizes: sm, md, lg, xl, xxl, 3xl, 4xl</h4>
                    </div>
                </>
            )
        }
    } else if (props.type == "classic") {
        if (props.size == null) {
            return (
                <div className="customponents-header header-md">
                    {props.children}
                </div>
            )
        } else if (props.size == "sm") {
            return (
                <div className="customponents-header header-sm">
                    {props.children}
                </div>
            )
        } else if (props.size == "md") {
            return (
                <div className="customponents-header header-md">
                    {props.children}
                </div>
            )
        } else if (props.size == "lg") {
            return (
                <div className="customponents-header header-lg">
                    {props.children}
                </div>
            )
        } else if (props.size == "xl") {
            return (
                <div className="customponents-header header-xl">
                    {props.children}
                </div>
            )
        } else if (props.size == "xxl") {
            return (
                <div className="customponents-header header-xxl">
                    {props.children}
                </div>
            )
        } else if (props.size == "3xl") {
            return (
                <div className="customponents-header header-3xl">
                    {props.children}
                </div>
            )
        } else if (props.size == "4xl") {
            return (
                <div className="customponents-header header-4xl">
                    {props.children}
                </div>
            )
        } else if (props.size == "5xl") {
            return (
                <div className="customponents-header header-5xl">
                    {props.children}
                </div>
            )
        } else if (props.size == "6xl") {
            return (
                <div className="customponents-header header-6xl">
                    {props.children}
                </div>
            )
        } else {
            return (
                <>
                    <div className="customponents-error-wrapper">
                        <h1>Error: Unkown size property "{props.size}"</h1>
                        <h3>on component: CHeader</h3>
                        <h4>Available sizes: sm, md, lg, xl, xxl, 3xl, 4xl</h4>
                    </div>
                </>
            )
        }
    } else if (props.type == "sticky") {
        if (props.size == null) {
            return (
                <div className="customponents-header header-md header-sticky">
                    {props.children}
                </div>
            )
        } else if (props.size == "sm") {
            return (
                <div className="customponents-header header-sm header-sticky">
                    {props.children}
                </div>
            )
        } else if (props.size == "md") {
            return (
                <div className="customponents-header header-md header-sticky">
                    {props.children}
                </div>
            )
        } else if (props.size == "lg") {
            return (
                <div className="customponents-header header-lg header-sticky">
                    {props.children}
                </div>
            )
        } else if (props.size == "xl") {
            return (
                <div className="customponents-header header-xl header-sticky">
                    {props.children}
                </div>
            )
        } else if (props.size == "xxl") {
            return (
                <div className="customponents-header header-xxl header-sticky">
                    {props.children}
                </div>
            )
        } else if (props.size == "3xl") {
            return (
                <div className="customponents-header header-3xl header-sticky">
                    {props.children}
                </div>
            )
        } else if (props.size == "4xl") {
            return (
                <div className="customponents-header header-4xl header-sticky">
                    {props.children}
                </div>
            )
        } else if (props.size == "5xl") {
            return (
                <div className="customponents-header header-5xl header-sticky">
                    {props.children}
                </div>
            )
        } else if (props.size == "6xl") {
            return (
                <div className="customponents-header header-6xl header-sticky">
                    {props.children}
                </div>
            )
        } else {
            return (
                <>
                    <div className="customponents-error-wrapper">
                        <h1>Error: Unkown size property "{props.size}"</h1>
                        <h3>on component: CHeader</h3>
                        <h4>Available sizes: sm, md, lg, xl, xxl, 3xl, 4xl</h4>
                    </div>
                </>
            )
        }
    } else {
        return (
            <>
                <div className="customponents-error-wrapper">
                    <h1>Error: Unkown type property "{props.type}"</h1>
                    <h3>on component: CHeader</h3>
                    <h4>Available types: classic, sticky</h4>
                </div>
            </>
        )
    }
}