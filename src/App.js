import React from 'react'
import './App.css'
import './styles/main.css'
import Logo from './default-images/logo.png'
import CHeader from './components/CHeader'
import CNavMenu from './components/CNavMenu'
import CNavMenuBtn from './components/CNavMenuBtn'
import CDropMenuBtn from './components/CDropMenuBtn'
import CLogo from './components/CLogo'

function App() {
  return (
    <>
      <div className="App">
        <CHeader size="lg" type="sticky">
          <CLogo src={Logo} alt="Customponents Logo" href="/" />
          <CNavMenu size="3xl">
            <CNavMenuBtn href="/">Home</CNavMenuBtn>
            <CNavMenuBtn href="/contact">Contact</CNavMenuBtn>
            <CNavMenuBtn href="/careers">Careers</CNavMenuBtn>
            <CNavMenuBtn href="/about">About</CNavMenuBtn>
          </CNavMenu>
          <CDropMenuBtn size="md" type="burger" />
        </CHeader>
      </div>
    </>
  )
}

export default App


/*

The above code is equal to the following code:

<div className="App">
  <div className="customponents-header header-lg sticky">
    <div className="customponents-logo">
      <a className="customponents-logo-link" href="/">
        <img className="customponents-logo-img" src="logo.png" alt="Customponents Logo" />
      </a>
    </div>
    <div className="customponents-nav-menu nav-menu-3xl dropdown">
      <div className="customponents-nav-menu-btn nav-menu-btn-md">
        <a href="/">Home</a>
      </div>
      <div className="customponents-nav-menu-btn nav-menu-btn-md">
        <a href="/contact">Contact</a>
      </div>
      <div className="customponents-nav-menu-btn nav-menu-btn-md">
        <a href="/careers">Careers</a>
      </div>
      <div className="customponents-nav-menu-btn nav-menu-btn-md">
        <a href="/about">About</a>
      </div>
    </div>
    <div className="customponents-drop-menu-btn drop-menu-btn-md">
      <div className="drop-menu-btn-burger"></div>
    </div>
  </div>
</div>

*/