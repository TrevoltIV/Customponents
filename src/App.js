import React from 'react'
import './App.css'
import './styles/main.css'
import CHeader from './components/CHeader'
import CNavMenu from './components/CNavMenu'
import CNavMenuBtn from './components/CNavMenuBtn'
import CDropMenuBtn from './components/CDropMenuBtn'

function App() {
  return (
    <>
      <div className="App">
        <CHeader size="lg" type="sticky">
          <CNavMenu size="3xl">
            <CNavMenuBtn type="classic" href="/">Home</CNavMenuBtn>
            <CNavMenuBtn type="classic" href="/contact">Contact</CNavMenuBtn>
            <CNavMenuBtn type="classic" href="/careers">Careers</CNavMenuBtn>
            <CNavMenuBtn type="classic" href="/about">About</CNavMenuBtn>
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