import React from 'react'
import './App.css'
import './styles/main.css'
import CHeader from './components/CHeader'
import CNavMenu from './components/CNavMenu'

function App() {
  return (
    <>
      <div className="App">
        <CHeader size="lg">
          <CNavMenu size="3xl">
            <a href="/home">Home</a>
            <a href="/example1">Example 1</a>
            <a href="/example2">Example 2</a>
            <a href="/example3">Example 3</a>
          </CNavMenu>
        </CHeader>
      </div>
    </>
  )
}

export default App
