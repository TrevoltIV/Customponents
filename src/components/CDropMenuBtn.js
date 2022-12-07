import { useState } from 'react'


export default function CDropMenuBtn(props) {
    const [menuDisplay, setMenuDisplay] = useState(false)
    const menu = document.getElementsByClassName('menu-dropdown')

    const displayMenu = () => {
        if (menuDisplay) {
            setMenuDisplay(false)
            menu[0].classList.toggle('customponents-menu-hidden')
        } else {
            setMenuDisplay(true)
            menu[0].classList.toggle('customponents-menu-hidden')
        }
    }

    
    if (props.size == null) {
        return (
            <div className="customponents-drop-menu-btn drop-menu-btn-md">
                <div className="drop-menu-btn-burger" onClick={displayMenu}></div>
            </div>
        )
    } else if (props.size == "sm") {
        return (
            <div className="customponents-drop-menu-btn drop-menu-btn-sm">
                <div className="drop-menu-btn-burger" onClick={displayMenu}></div>
            </div>
        )
    } else if (props.size == "md") {
        return (
            <div className="customponents-drop-menu-btn drop-menu-btn-md">
                <div className="drop-menu-btn-burger" onClick={displayMenu}></div>
            </div>
        )
    } else if (props.size == "lg") {
        return (
            <div className="customponents-drop-menu-btn drop-menu-btn-lg">
                <div className="drop-menu-btn-burger" onClick={displayMenu}></div>
            </div>
        )
    } else {
        return (
            <div className="customponents-error-wrapper">
                <h1>Error: Unknown size property "{props.size}"</h1>
                <h3>on component: CDropMenuBtn</h3>
                <h4>Available sizes: sm, md, lg</h4>
            </div>
        )
    }
}